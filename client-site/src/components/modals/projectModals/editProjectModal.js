import TextField from "../../UI/TextFieldComponent/TextField";
import Button from "../../UI/ButtonComponent/Button";
import { AiOutlineClose } from "react-icons/ai"

import '../modals.css'
const EditProjectModal = ({ onClose }) => {
    const handleModalContentClick = (e) => {

        e.stopPropagation();
    };
    return (
        <div className="modal">
            <div className="overlay" onClick={onClose}>
                <div className="modal-content" onClick={handleModalContentClick} >
                    <div className="modal-header">
                        <h2>Edit Project Details</h2>
                        <div className="modal-close-icon">
                            <AiOutlineClose onClick={onClose}/>
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
                            id="data"
                            label="Data"
                        />
                    </div>
                        <div className="modal-container">
                        <div className="selector" >

                            <label htmlFor="status">Status</label>
                            <select
                                className="addproject-select"
                                id="status"

                            >

                                <option value="Not Started" className="addproject-option">Not Started</option>
                                <option value="In Progress" className="addproject-option">In Progress</option>
                                <option value="Completed" className="addproject-option">Completed</option>
                            </select>
                        </div>

                        <div className="selector-assg" >
                            <label htmlFor="assigned">Assigned</label>
                            <select
                                className="addproject-select"
                                id="assigned" >

                                <option value="Employee 1" className="addproject-option">Employee 1</option>
                                <option value="Employee 2" className="addproject-option">Employee 2</option>
                                <option value="Employee 3" className="addproject-option">Employee 3</option>
                            </select>
                        </div>
                        </div>
                       
                    <div className="modal-button">
                        <Button type="submit">Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EditProjectModal;