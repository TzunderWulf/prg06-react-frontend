import { DeleteCharacter } from "./DeleteCharacter";
import { EditCharacter } from "./EditCharacter";

export function ReadCharacter(props) {
    // Make sure to double check if something is even selected
    if (props.selectedCharacter && isNaN(props.selectedCharacter)) {
        return(
            <div className="details-item">
                <div>
                    <h1>{props.selectedCharacter.name}</h1>
                    <i>ID: {props.selectedCharacter._id}</i>
                    <p>Wielding element: {props.selectedCharacter.element}</p>
                    <p>Residing region: {props.selectedCharacter.region}</p>
                </div>
                <div>
                    <EditCharacter selectedCharacter={props.selectedCharacter} reloadCharacters={props.reloadCharacters} 
                        loadCharacter={props.loadCharacter} setNotification={props.setNotification}
                    />
                    <DeleteCharacter selectedCharacter={props.selectedCharacter} reloadCharacters={props.reloadCharacters} 
                        resetActiveCharacter={props.resetActiveCharacter} setNotification={props.setNotification}
                    />
                    <i>IMMEDIATELY REMOVES CHARACTER</i>
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