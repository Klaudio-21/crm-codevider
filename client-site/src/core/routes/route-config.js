import AdminDashboard from "../../pages/dashboard/admin-dashboard/adminDashboard";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import { Outlet } from "react-router-dom"; 
import Layout from "../../components/layout";
import MyProfile from "../../pages/myProfile";
const routesConfig = [
    {
        path: "/",
        element: (
            <div>
                <Layout /> 
            </div>
        ),
        children: [
            {
                index: true,
                element: <AdminDashboard/>,
            },
            {
                path: "myprofile",
                element: <MyProfile />,
            },
        ],
    },

];

//Look if this way works !!!


export default routesConfig;
