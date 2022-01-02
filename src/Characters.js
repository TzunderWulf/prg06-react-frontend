import { useState, useEffect } from "react";

export function Characters() {
    const [characters, setCharacters] = useState([]);

    const loadCharacters = () => {
        fetch('http://145.24.222.243:8080/characters', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => { setCharacters(data.items) })
        .catch(error => console.log(error))
    };

    const listCharacters = characters.map((character) => {
        return(
            <div className="block-around" key={character._id}>
                <p>{character.name}</p>
                <button>See more</button>
                <button>Edit {character.name}</button>
                <button>Delete {character.name}</button>
            </div>
        )
    })

    useEffect(loadCharacters, []);

    return(
        <div>
            {listCharacters}
        </div>
    )
}