import { useEffect, useState } from "react";

import { ReadCharacter } from "./ReadCharacter";

export function Characters(props) {
    const [error, setError] = useState();

    const [selectedCharacter, setSelectedCharacter] = useState();

    // Set the read to the clicked character
    const loadActiveCharacter = (data) => {
        setSelectedCharacter(data); 
    };

    const resetActiveCharacter = () => {
        setSelectedCharacter(); 
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const listCharacters = props.characters.map((character) => {
        return(
            <div 
                key={character._id} 
                onClick={() => { loadActiveCharacter(character); scrollToTop() }} 
                className="item">
                <p>{character.name}</p>
            </div>
        )
    })

    return(
        <div className="content">
            <ReadCharacter selectedCharacter={selectedCharacter} reloadCharacters={props.reloadCharacters}
                resetActiveCharacter={resetActiveCharacter} setNotification={props.setNotification}
            />
            <div className="list-of-items">
                {error && <p>There is an issue, if the issue persists, the issue lays with the server.</p>}
                {listCharacters}
            </div>
        </div>
    );
}