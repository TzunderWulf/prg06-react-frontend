import { useEffect, useState } from 'react';

import { ReadCharacter } from './ReadCharacter';

export function Characters() {
    const [error, setError] = useState()
    const [characters, setCharacters] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState()
    const [page, setPage] = useState(1)
    const [totalItems, setTotalItems] = useState(0)


    const loadCharacters = () => {
        fetch(`http://145.24.222.243:8080/characters`, {
            headers: {
                "Accept": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => setCharacters(data.items))
        .catch(error => setError(error))
    };

    const loadActiveCharacter = (data) => {
        setSelectedCharacter(data); 
    };

    const listCharacters = characters.map((character) => {
        return(
            <div key={character._id} onClick={() => loadActiveCharacter(character)} className="item">
                {character.name}
            </div>
        )
    })

    useEffect(loadCharacters, [page]);

    return(
        <div className="content">
            <ReadCharacter selectedCharacter={selectedCharacter} />
            <div className="list-of-items">
                {error && <p>There is an issue, if the issue persists, the issue lays with the server.</p>}
                {listCharacters}
            </div>
        </div>
    );
}