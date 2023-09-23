import TextField from "../../UI/TextFieldComponent/TextField";
import Button from "../../UI/ButtonComponent/Button";
import { GrClose } from "react-icons/gr"

import '../modals.css'
const FilterProjectModal = ({ onClose }) => {
    const handleModalContentClick = (e) => {

        e.stopPropagation();
    };
    return (
        <div className="modal">
            <div className="overlay" onClick={onClose}>
                <div
                    className="modal-content"
                    onClick={handleModalContentClick}
                >
                    <div className="modal-header">
                        <h2 className="modal-title"> Filter Projects</h2>
                      
                            <Button className="clear-button">
                                Clear
                            </Button>
                            
                      
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
                                id="assigned"
                                label="Assigned"
                            />

                        </div>
                        <div className="modal-container">
                        <div className="projects-status">
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
                            </div>
                            </div>
                    </div>
                    <div className="modal-buttons-container">
                        <Button type="submit" onClick={onClose}>Cancel</Button>
                        <Button type="submit"> Submit </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterProjectModal;