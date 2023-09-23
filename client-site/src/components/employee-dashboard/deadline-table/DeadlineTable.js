import React from "react"
import './DeadlineTable.css';


const DeadlineTable = () => {

    return (
        <div className="deadline-container">
            <thead className="thead">
                <tr className="tr">
                    <th className="name">Project Name</th>
                    <th className="time">Time Left</th>
                </tr>
            </thead>
            <div className="scrollable-table-container">
                <table className="deadline">
                    
                    <tbody>
                       
                        <tr >
                            <td>Test</td>
                            <td>10</td>

                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DeadlineTable;
