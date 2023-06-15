import { Outlet, useLocation } from "react-router-dom";
import Navber from "../pages/shared/Navber/Navber";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noHeader = location.pathname.includes('login')
    return (
        <div>
            {noHeader || <Navber></Navber>}
            <Outlet></Outlet>
            {noHeader || <Footer></Footer>}
        </div>
    );
};

export default Main;