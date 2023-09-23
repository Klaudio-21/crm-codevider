import TextField from "../../UI/TextFieldComponent/TextField";
import Button from "../../UI/ButtonComponent/Button";

import '../modals.css'
const FilterClientModal = ({ onClose}) => {
    
    const handleModalContentClick = (e) => {
    
        e.stopPropagation();
    };

    return (
        <div className="modal" >
            <div className="overlay" onClick={onClose}>
                <div className=  "modal-content" onClick={handleModalContentClick}>
                    <div className="modal-header">
                        <h2 > Filter Clients</h2>
                        <div className="modal-close-icon">
                            <Button
                                className="clear-button"
                              
                            >
                                Clear
                            </Button>
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
                                id="gender"
                                label="Gender"
                            />
                        </div>
                        <div className="modal-container">
                            <TextField
                               
                                type="text"
                                id="city"
                                label="City"
                            />
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

export default FilterClientModal;