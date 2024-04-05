import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    const [personagens, setPersonagens] = useState([]);
    const [pesquisa, setPesquisa] = useState("");
    const valorInput = useRef()



    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character`)
            .then((response) => response.json())
            .then((data) => {

                setPersonagens(data.results)
            });
    }, []);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?name=${pesquisa}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                console.log(data);
                setPersonagens(data.results)
            });

    }, [{ pesquisar }]);

    function pesquisar() {
        setPesquisa(valorInput.current.value)
    }
    if (!personagens) {
        return "Carregando";
    }



    return (
        <>

            <header>
                <h1>Lista de Personagens</h1>
                <input ref={valorInput} type="text" />
                <button onClick={pesquisar}>Pesquisar</button>
            </header>
            <div className="container">
                {personagens.map((item) => (
                    <div className="flex time-foto " key={item.id}>
                        <Link to={`detalhes/${item.id}`}>
                            <img src={item.image} />
                            <div className="times-nome">
                                <h2>{item.name}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;

