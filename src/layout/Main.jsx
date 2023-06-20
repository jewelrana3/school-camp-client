import { Outlet, useLocation } from "react-router-dom";
import Navber from "../pages/shared/Navber/Navber";
import Footer from "../pages/shared/Footer/Footer";
import { useEffect, useState } from "react";
// import HomeRoute from "../route/HomeRoute";
const Main = () => {
    const location = useLocation();
    const noHeader = location.pathname.includes('login')
    const [color,setColor] = useState('dark')
   
    return (
        <div  data-theme={color}>
            {noHeader || <Navber color={color} setColor={setColor}></Navber>}
            <Outlet></Outlet>
           {/* <HomeRoute><Outlet></Outlet></HomeRoute> */}
            {noHeader || <Footer></Footer>}
        </div>
    );
};

export default Main;