import { Outlet } from "react-router-dom";
import Footer from './../Shared_Components/Footer';
import Navbar from "../Shared_Components/Navbar";

const MainLayout = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;