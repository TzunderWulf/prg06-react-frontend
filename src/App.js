import { useState, useEffect } from "react"

import { CreateCharacter } from "./CreateCharacter";
import { Characters } from "./Characters";

export function App() 
{

    const [characters, setCharacters] = useState([]);

    // Fetch all characters from webservice
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

    useEffect(loadCharacters, []);

    return(
        <div>
            <div className="top-bar">
                <h1>The Genshin Impact Character Archive</h1>
                <CreateCharacter reloadCharacters={loadCharacters} />
            </div>
            <Characters characters={characters} reloadCharacters={loadCharacters} />
        </div>
    )
}