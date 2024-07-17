import { Outlet } from "react-router-dom";
import Navbar from "../components/navber/Navber";

const Main = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Main;