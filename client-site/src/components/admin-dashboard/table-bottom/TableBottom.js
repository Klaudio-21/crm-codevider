import React from "react"
import './TableBottom.css';


const BottomTable = () => {

    return (
        <div className= "db-container-table">
            <div className="db-table-header">
                <h4 className="db-h4">Employees</h4>
               
            </div>
            <table className="db-table">
                <thead>
                    <tr>
                        <th className="db-th">Name</th>
                        <th className="db-th">Surname</th>
                        <th className="db-th">Position</th>
                        <th className="db-th">Salary</th>
                    </tr>
                </thead>
                <tbody>
                   
                            <tr className="db-tr" >
                                <td className="db-td">TEST</td>
                                <td className="db-td">TEST</td>
                                <td className="db-td">TEST</td>
                                <td className="db-td">200$</td>
                    </tr>
                    
                      
                </tbody>
            </table>
           
        </div>
    )
}

export default BottomTable;
