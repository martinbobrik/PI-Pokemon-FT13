const { Router } = require('express');
const { Pokemon, Type } = require('../db');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', async(req, res, next) => {
  const name = req.query.name;

  if (!name) {
    const db = await Pokemon.findAll({ include: [{ model: Type }] })
    const api = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')
    const apiUrls = api.data.results.map(r => r.url);
    const apiArr = await apiUrls.map(async(r) => await axios.get(r));
    Promise.all([db, ...apiArr])
      .then(results => {
        const [db, ...apiArr] = results;
        dbRes = db.map(r =>
          r = {
            id: r.dataValues.id,
            name: r.dataValues.name,
            img: r.dataValues.img,
            types: r.dataValues.types
          });
        apiRes = apiArr.map(r =>
            r = {
              id: r.data.id,
              name: r.data.name,
              img: r.data.sprites.other.dream_world.front_default,
              types: r.data.types
            }) // por ahora asi para que no tarde tanto, luego sacar el .name para que traiga todo
        const finalRes = [...dbRes, ...apiRes];
        res.send(finalRes);
      })
  } else {
    Pokemon.findOne({
        where: { name: name }
      })
      .then(result => {
        if (!result) {
          return axios.get('https://pokeapi.co/api/v2/pokemon/' + name)
            .then(result => {
              res.send(result.data)
            })
        } else {
          res.send(result);
        }
      })
      .catch((error) => {
        if (error.response.status == 404) {
          res.status(404).send("Sorry, we don't have that one.")
        } else {
          res.sendStatus(error.response.status);
        }
      });
  }
}); // en esta tambien va name por query

router.get('/pokemons/:id', (req, res) => {
  const id = req.params.id;
  if (id.length > 10) {
    Pokemon.findByPk(id, { include: [{ model: Type }] })
      .then(result => res.send(result))
  } else {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
      .then(results => {
        //   console.log('----------------', results.data);
        const apiPoke = {
          id: results.data.id,
          name: results.data.name,
          hp: results.data.stats[0].base_stat,
          attack: results.data.stats[1].base_stat,
          defense: results.data.stats[2].base_stat,
          speed: results.data.stats[5].base_stat,
          height: results.data.height,
          weight: results.data.weight,
          img: results.data.sprites.other.dream_world.front_default
        }
        res.send(apiPoke);
      })
  }
});
router.post('/pokemons', (req, res) => {
  const body = req.body;
  return Pokemon.create({
      ...body,
      id: uuidv4()
    })
    .then(element => res.send(element));

});

router.get('/types', (req, res, next) => {
  Type.findAll()
    .then(result => {
      if (result.length === 0) {
        axios.get('https://pokeapi.co/api/v2/type')
          .then(result => {
            const types = result.data.results;
            const db = types.map((t) => {
              const id = t.url.split('/')[6];
              const name = t.name;
              return Type.create({
                name: name,
                id: id
              })
            })
            Promise.all(db).then(result => res.send(result))
          })
          .catch((error) => next(error));
      } else {
        res.send(result)
      }
    })
});

router.post('/pokemons/types', (req, res, next) => {
  const { pokemonId, typeIds } = req.body;
  Pokemon.findByPk(pokemonId)
    .then(pokemon => {
      typeIds.forEach(typeId => pokemon.addType(typeId))
    }).then(() => res.sendStatus(200))
    .catch((error) => next(error))
})

module.exports = router;