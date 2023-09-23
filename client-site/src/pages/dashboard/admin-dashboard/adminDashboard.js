import React from 'react';
import './adminDashboard.css';
import DashboardHeader from '../../../components/admin-dashboard/top-table-component/ToTable';
import AllProjectPieChart from '../../../components/admin-dashboard/allProject-pieChart/PieChart';
import AdmLineChart from '../../../components/admin-dashboard/lineChart/LineChart';
import BottomTable from '../../../components/admin-dashboard/table-bottom/TableBottom';
const AdminDashboard = () => {
    
    return (
        <div className="dashboard-container">
            <div id='header'> < DashboardHeader /></div>
            <div id='chart-one'><AllProjectPieChart /></div>
            <div id='chart-two'> <AdmLineChart /></div>
            <div id='bottom-table'><BottomTable /></div> 
        </div>
    );
};

export default AdminDashboard;
