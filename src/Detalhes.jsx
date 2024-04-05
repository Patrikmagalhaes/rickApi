import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Detalhes() {
    const { id } = useParams()
    const [times, setTimes] = useState(null)
    console.log(id)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((data) => {




                setTimes([data]);

                console.log(times)

            });


    }, []);


    if (!times || times == null) return "Carregando"
    return (
        <>

            <div className="container">

                <div >
                    <h2 className="titulo">Detalhes do Personagem</h2>
                    {times.map((item) => (
                        <><div className="time-foto" key={item.id}>

                            <img src={times[0].image} alt="" />
                            <p>Nome:{times[0].name}</p>
                            <p>Status: {times[0].status}</p>
                            <p>Espécie: {times[0].species}</p>
                        </div>
                            <div>


                            </div></>
                    ))}
                    <h2>Episódios:</h2>
                    {times.map((item) => (

                        <div className="time-foto" key={item.id}>
                            <p>Número:{times[0].episode}</p>
                        </div>


                    ))}
                </div>
            </div>
        </>
    )
}

export default Detalhes