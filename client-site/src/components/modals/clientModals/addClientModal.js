import TextField from '../../UI/TextFieldComponent/TextField'
import Button from '../../UI/ButtonComponent/Button'
import React from 'react';

import '../modals.css'
const AddClientModal = ({ onClose }) => {
    const handleModalContentClick = (e) => {

        e.stopPropagation();
    };
    return (
        <div className="modal">
        <div className="overlay" onClick={onClose}>
           
                <form className="user-modal-content" onClick={handleModalContentClick}>
                    <div className="projects-modal-header">
                        <h1 className="modal-title">Add Client</h1>
                    </div>
                    <div className="modal-options">

                        <div className="modal-container">
                            <TextField

                                type="text"
                                id="name"
                                label="Name"
                            />
                            <TextField

                                type="text"
                                id="gender"
                                label="Gender"
                            />

                        </div>

                        <div className="modal-container">
                            <TextField

                                type="text"
                                id="surname"
                                label="Surname"
                            />
                            <TextField

                                type="text"
                                id="birthday"
                                label="Birthday"
                            />

                        </div>

                        <div className="modal-container">
                            <TextField

                                type="text"
                                id="city"
                                label="City"
                            />
                            <TextField

                                type="email"
                                id="email"
                                label="Email"
                            />
                        </div>
                        <div className="modal-container">
                            <TextField

                                type="text"
                                id="phone"
                                label="Phone"
                            />
                        </div>
                        <div className="modal-buttons-container">
                            <Button type="submit" onClick={onClose}>Cancel</Button>
                            <Button type="submit">Add</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default AddClientModal;