const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', (req, res) => {}); // en esta tambien va name por query
router.get('/pokemons/:idPokemon', (req, res) => {});
router.post('/pokemons', (req, res) => {});
router.get('/types', (req, res) => {});

module.exports = router;