import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./pages/dashboard/admin-dashboard/adminDashboard";
import { BrowserRouter as Router } from "react-router-dom";
import RouteRenderer from "./core/routes/route-renderer.js";
import MyProfile from "./pages/myProfile";
import Layout from "./components/layout";
import Employees from "./pages/employees";
import Clients from "./pages/clients";
import Projects from "./pages/projects";
import EmployeeDashboard from "./pages/dashboard/employees-dashboard/employeeDashboard";
import Settings from "./pages/setting";
import Login from './pages/authentication/login/Login'
import { SidebarProvider } from "./context/sidebarContext";
import ChangePassword from "./components/changepasswordcomponent/changePassword";

function App() {
  return (

    <Router>
      <SidebarProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="myprofile" element={<MyProfile />} />
            <Route path="employees" element={<Employees />} />
            <Route path="clients" element={<Clients />} />
            <Route path="projects" element={<Projects />} />
            <Route path="settings" element={<Settings />} />
            <Route path="changepassword" element={<ChangePassword />} />
          </Route>
          <Route path="login" element={<Login />} />

        </Routes>
      </SidebarProvider>
    </Router>



  )
}

export default App;