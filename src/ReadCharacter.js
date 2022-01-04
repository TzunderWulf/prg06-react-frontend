import { DeleteCharacter } from "./DeleteCharacter";
import { EditCharacter } from "./EditCharacter";

export function ReadCharacter(props) {
    // Make sure to double check if something is even selected
    if (props.selectedCharacter && isNaN(props.selectedCharacter)) {
        return(
            <div className="details-item">
                <div>
                    <h1>{props.selectedCharacter.name}</h1>
                    <p>Wielding element: {props.selectedCharacter.element}</p>
                    <p>Residing region: {props.selectedCharacter.region}</p>
                </div>
                <div>
                    <EditCharacter selectedCharacter={props.selectedCharacter} reloadCharacters={props.reloadCharacters} 
                        resetActiveCharacter={props.resetActiveCharacter} setNotification={props.setNotification}
                    />
                    <DeleteCharacter selectedCharacter={props.selectedCharacter} reloadCharacters={props.reloadCharacters} 
                        resetActiveCharacter={props.resetActiveCharacter} setNotification={props.setNotification}
                    />
                </div>
            </div>
        );
    } else {
        return(
            <div className="details-item">
                <p>Please select an character to see it's details.</p>
            </div>
        );
    }

}