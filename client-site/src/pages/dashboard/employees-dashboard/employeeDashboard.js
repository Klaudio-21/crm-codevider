import React from 'react';
import './employeeDashboard.css';
import DeadlineTable from '../../../components/employee-dashboard/deadline-table/DeadlineTable';
import TopTable from '../../../components/employee-dashboard/employee-top-table/Toptable';
import ProjectsPieChart from '../../../components/employee-dashboard/projects-PieChart/ProjectsPie';
import EmployeeTable from '../../../components/employee-dashboard/employee-bottom-table/BottomTable';
const EmployeeDashboard = () => {

    return (
        <div className="dashboard-container">
            <div id='header'> < TopTable /></div>
            <div id='chart-one'><ProjectsPieChart/></div>
            <div id='chart-two'> <DeadlineTable /></div>
            <div id='bottom-table'><EmployeeTable /></div>
        </div>
    );
};

export default EmployeeDashboard;