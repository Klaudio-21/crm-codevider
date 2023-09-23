import React from "react"
import './Toptable.css';


const TopTable = () => {

    return (
        <div
            className="employee-db-container"
           
        >
            <div className="employee-db-header">
                <div className="db-employees">

                    <div className="db-text">
                        <p>Status </p>
                        <p>Test</p>
                    </div>
                </div>
                <div className="db-employees">
                    <div className="db-text">
                        <p>Deapartment</p>
                        <p>Test</p>
                    </div>
                </div>
                <div className="db-employees">

                    <div className="db-text">
                        <p>Position</p>
                        <p>Test</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopTable;
