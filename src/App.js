import { useState, useEffect } from "react"

import { CreateCharacter } from "./CreateCharacter";
import { Characters } from "./Characters";

export function App() 
{

    const [characters, setCharacters] = useState([]);
    const [notification, setNotification] = useState("");
    const [fetchURL, setFetchURL] = useState("http://145.24.222.243:8080/characters?start=1&limit=5");
    const [pagination, setPagination] = useState();

    // Fetch all characters from webservice
    const loadCharacters = (link) => {
        fetch(link, {
            headers: {
                "Accept": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => {setCharacters(data.items); setPagination(data.pagination._links)})
        .catch(error => console.log(error))
    };

    useEffect(() => loadCharacters(fetchURL), [fetchURL]);

    return(
        <div>
            <div className="top-bar">
                <h1 className="website-title">The Genshin Impact Character Archive</h1>
                <CreateCharacter reloadCharacters={loadCharacters} setNotification={setNotification} 
                    currentURL={fetchURL}
                />
                {notification && <p className="notification">{notification}</p>}
            </div>
            <div className="pagination-buttons">
                <button className="standard-button" onClick={() => setFetchURL(pagination.first.href)}>First page</button>
                <button className="standard-button" onClick={() => setFetchURL(pagination.previous.href)}>Previous page</button>
                <button className="standard-button" onClick={() => setFetchURL(pagination.next.href)}>Next page</button>
                <button className="standard-button" onClick={() => setFetchURL(pagination.last.href)}>Last page</button>
            </div>
            <Characters characters={characters} reloadCharacters={loadCharacters} setNotification={setNotification} 
                currentURL={fetchURL}
            />
        </div>
    )
}