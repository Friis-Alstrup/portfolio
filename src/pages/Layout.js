import { Outlet } from "react-router-dom";
import "../style/style.css";

const Layout = () => {
    return (
        <>
            <Outlet />
        </>
    );
}

export default Layout;