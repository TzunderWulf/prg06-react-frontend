import { useState, useEffect } from 'react';

import { Character } from './Character'

export function Characters() {

    const [characters, setCharacters] = useState([]);

    const loadJSON = () => {
        fetch('http://145.24.222.243:8080/characters', {
            mode: 'cors',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {setCharacters(data.items)})
            .catch(err => console.error(err))
    }

    const createCharacters = characters.map((item) => {
            return(
                <Character key={item._id} name={item.name} element={item.element} />
            );
        })

    useEffect(loadJSON, []);

    return(
        <div className='block-around '>
            {createCharacters}
        </div>
    );
}