import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#app');

export function CreateCharacter() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [inputs, setInputs] = useState({
        name: '',
        region: '',
        element: ''
    });
    const [error, setError] = useState('');
    let formValid = false;

    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {

    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleChangeInput = (e) => {
        const inputValue = e.target.value;
        setInputs({
            ...inputs,
            [e.target.name]: inputValue
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any are empty
        if (inputs.name.trim() == "" || inputs.element.trim() == "" || inputs.region.trim() == "") {
            setError('No fields are allowed to be empty');
        } else {
            formValid = true;
            setError('');
        }

        console.log(inputs);
        console.log(`${error}, form valid: ${formValid}`);

        if (formValid && error.trim() == "") {
            // Do post request to webservice
        
            // Send confirmation back
            
            closeModal();
        }

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
            {}
            <form>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name="name" minLength={2} value={inputs.name} 
                        onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor='element'>Element</label>
                    <input type="text" name="element" minLength={2} value={inputs.element} 
                        onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor='region'>Region</label>
                    <input type="text" name="region" minLength={2} value={inputs.region} 
                        onChange={handleChangeInput} />
                </div>
                <input type='submit' value='Add character' onClick={handleSubmit} />
            </form>
        </Modal>            
        </div>
    )
}