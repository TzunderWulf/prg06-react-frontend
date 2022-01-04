import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#app")

export function CreateCharacter(props) {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        element: "",
        region: ""
    })

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    // Function to handle changes in any inputs
    const handleChange = (e) => {
        const value = e.target.value;
        setInputs({
            ...inputs,
            [e.target.name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Submitted: ${inputs.name}, ${inputs.element}, ${inputs.region}`)
    }

    return(
        <div>
            <button onClick={openModal} className="standard-button">Add character to archive</button>

            <Modal
                isOpen={modalIsOpen} 
                onRequestClose={closeModal} 
                contentLabel="Add character to archive"
            >
                <div className="top-bar-modal">
                    <div className="title">
                        <h1>Add character to the archive</h1>
                        <p className="error">No fields are allowed to be empty.</p>
                    </div>
                    <button className="close-button" onClick={closeModal}>X</button>
                </div>
                <div>
                    <form>
                        <div className="input-field">
                            <label>Full name</label>
                            <input type="text" name="name" value={inputs.name} onChange={handleChange} />
                        </div>
                        <div className="input-field">
                            <label>Wielding element</label>
                            <input type="text" name="element" value={inputs.element} onChange={handleChange} />
                        </div>
                        <div className="input-field">
                            <label>Residing region</label>
                            <input type="text" name="region" value={inputs.region} onChange={handleChange} />
                        </div>
                        <input className="standard-button" type="submit" value="Add character" onClick={handleSubmit} />
                    </form>
                </div>
            </Modal>
        </div>
    );
}