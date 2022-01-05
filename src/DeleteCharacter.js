import { useState } from "react";

export function DeleteCharacter(props) {
    const deleteCharacter = (id) => {
        fetch(`http://145.24.222.243:8080/characters/${id}`, {
            method: "delete",
            headers: {
                "Accept": "application/json",
            }
        })
        .then(response => {
            response.json();
            if (response.status == 204) {
                props.reloadCharacters(props.currentURL);
                props.resetActiveCharacter();
                props.setNotification(`Character snapped from existence! 👍`);
            } else {
                props.setNotification(`Something went wrong, please try again. 😞`);
            }
        })
        .catch(error => console.log(error))
    }

    return(
        <div>
            <button className="standard-button" onClick={() => deleteCharacter(props.selectedCharacter._id)}>Delete {props.selectedCharacter.name}</button>
        </div>        
    );
}