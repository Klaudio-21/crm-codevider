import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import "./index.css";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <div className="container">
        <nav> <Navbar /></nav>
        <div id="sidebar"> <Sidebar /></div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
