export default function Card(data){
    
    return (
        <div>
            <ul key={data.data.id}>
                <li>Name: {data.data.name}</li>
                <li><img src={data.data.img} alt="not found" /></li>
                <li>Types: <ul>
                    {data.data.types?.map(t => {return <li key={t.slot || t.id}>{t.type?.name || t.name}</li>})}
                    </ul></li>
            </ul>
        </div>
    )
}