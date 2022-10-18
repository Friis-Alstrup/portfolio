import { Outlet } from "react-router-dom";
import "../../style/page.css";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
