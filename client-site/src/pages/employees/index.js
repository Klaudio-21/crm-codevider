import React from 'react';
import EmployeesTable from '../../components/tables/employeeTable/employeeTable';
import './index.css'
import { setupAxiosInterceptors } from '../../services/axiosInterceptor';
function Employees() {
    setupAxiosInterceptors();
    return (
        <div className='employees-page-table'>
            <EmployeesTable />
            </div>
)
}

export default Employees;