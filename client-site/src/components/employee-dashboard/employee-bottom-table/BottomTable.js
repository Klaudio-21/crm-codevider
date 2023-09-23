import React from "react"
import './BottomTable.css';


const EmployeeTable = () => {

    return (
        <div
            className= "employee-db-container-table"
            
        >

            <table className="employee-db-table">
                <thead>
                    <tr>
                        <th className="db-th">Name</th>
                        <th className="db-th">Surname</th>
                        <th className="db-th">Birthday</th>
                        <th className="db-th">Salary</th>
                    </tr>
                </thead>
                <tbody>

                    <tr className="db-tr" >
                        <td className="db-td">Test</td>
                        <td className="db-td">Test</td>
                        <td className="db-td">Test</td>
                        <td className="db-td">1000$</td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default EmployeeTable;
