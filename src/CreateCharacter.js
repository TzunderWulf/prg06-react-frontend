import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#app');

export function CreateCharacter() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [characterName, setCharacterName] = useState('');
    const [characterElement, setCharacterElement] = useState('');
    const [characterRegion, setCharacterRegion] = useState('');

    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {

    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleSubmit = () => {

    }

    return(
        <div>
            <button onClick={openModal}>Add character</button>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel='Create character modal'
        >
            <button onClick={closeModal}>Close menu</button>
            <h1>Add new character</h1>
            <form>
                <div>
                    <label htmlFor='character-name'>Name</label>
                    <input type="text" name="character-name" minLength={2} value={characterName} 
                        onChange={(e) => handleCharacterNameChange(e)} />
                </div>
                <div>
                    <label htmlFor='character-element'>Element</label>
                    <input type="text" name="character-element" minLength={2} value={characterElement} 
                        onChange={(e) => handleCharacterNameChange(e)} />
                </div>
                <div>
                    <label htmlFor='character-region'>Region</label>
                    <input type="text" name="character-region" minLength={2} value={characterRegion} 
                        onChange={(e) => handleCharacterNameChange(e)} />
                </div>
                <input type='submit' value='Add character' onClick={handleSubmit} />
            </form>
        </Modal>            
        </div>
    )
}