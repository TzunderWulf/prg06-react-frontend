import { useEffect, useState } from "react";

import { ReadCharacter } from "./ReadCharacter";

export function Characters(props) {
    const [error, setError] = useState();

    const [selectedCharacter, setSelectedCharacter] = useState();

    let idFromURL = window.location.pathname.replace('/', '');

    // Set the read to the clicked character
    const loadCharacter= (id) => {
        fetch(`http://145.24.222.243:8080/characters/${id}`, {
            headers: {
                "Accept": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => setSelectedCharacter(data))
        .catch(error => console.log(error))
    };

    const resetActiveCharacter = () => {
        setSelectedCharacter(); 
    }

    const listCharacters = props.characters.map((character) => {
        return(
            <div 
                key={character._id} 
                onClick={() => { loadCharacter(character._id) }} 
                className="item">
                <p>{character.name}</p>
            </div>
        )
    })

    useEffect(() => {
        if (idFromURL) {
            loadCharacter(idFromURL)
        }
    }, [idFromURL])

    return(
        <div className="content">
            <ReadCharacter selectedCharacter={selectedCharacter} reloadCharacters={props.reloadCharacters}
                resetActiveCharacter={resetActiveCharacter} setNotification={props.setNotification}
                loadCharacter={loadCharacter} currentURL={props.currentURL}
            />
            <div className="list-of-items">
                {error && <p>There is an issue, if the issue persists, the issue lays with the server.</p>}
                {listCharacters}
            </div>
        </div>
    );
}