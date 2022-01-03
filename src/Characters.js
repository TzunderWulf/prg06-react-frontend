import { useState, useEffect } from "react";

export function Characters() 
{
    const [characters, setCharacters] = useState([]);

    const loadInCharacters = () => {
        fetch(`http://145.24.222.243:8080/characters`, {
            headers: {
                "Accept": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => setCharacters(data.items))
        .catch(error => console.log(error))
    };

    const listAllCharacters = characters.map((character) => {
        return(
            <div className="block-around" key={character._id}>
                <h1>{character.name}</h1>
            </div>
        );
    });

    useEffect(loadInCharacters, []);

    return(
        <div>
            {listAllCharacters}
        </div>
    );
}