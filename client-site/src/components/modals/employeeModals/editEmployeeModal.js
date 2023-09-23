import TextField from "../../UI/TextFieldComponent/TextField";
import Button from "../../UI/ButtonComponent/Button";
import { AiOutlineClose } from "react-icons/ai"

import '../modals.css'
const EditEmployeeModal = ({ onClose }) => {
    const handleModalContentClick = (e) => {

        e.stopPropagation();
    };
    return (
        <div className="modal">
            <div className="overlay" onClick={onClose}>
                <div className="user-modal-content" onClick={handleModalContentClick}>
                    <div className="modal-header">
                        <h2>Edit Employee Details</h2>
                        <div className="user-modal-close-icon">
                            <AiOutlineClose onClick={onClose} />
                        </div>
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
                            id="surname"
                            label="Surname"
                        />
                    </div>
                        <div className="modal-container">
                        <TextField

                            type="email"
                            id="email"
                            label="Email"
                        />
                        <TextField

                            type="text"
                            id="phone"
                            label="Phone"
                        />
                    </div>
                        <div className="modal-container">
                        <TextField

                            type="text"
                            id="city"
                            label="City"
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
                            id="position"
                            label="Position"
                        />
                        <TextField
                            type="text"
                            id="deapartment"
                            label="Department"
                        />
                    </div>
                        <div className="modal-container">
                        <TextField

                            type="text"
                            id="birthday"
                            label="Birthday"
                        />
                        </div>
                        <div className="modal-container">
                        <TextField
                            type="text"
                            id="salary"
                            label="Salary"
                        />
                        </div>
                    </div>
                        <div className="modal-button">
                        <Button type="submit">Save Changes</Button>
                        </div>
                        
                </div>
            </div>
        </div>
    );
};
export default EditEmployeeModal;