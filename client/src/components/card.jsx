export default function Card(data){
    const poke = data.data;
    return (
        <div>
            <ul key={poke.id}>
                <li>Name: {poke.name}</li>
                <li><img src={poke.img} alt="not found" /></li>
                <li>Types: <ul>
                    {poke.types?.map(t => {return <li key={t.id}>{t.name}</li>})}
                    </ul></li>
            </ul>
        </div>
    )
}