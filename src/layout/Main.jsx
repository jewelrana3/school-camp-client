import { Outlet, useLocation } from "react-router-dom";
import Navber from "../pages/shared/Navber/Navber";
import Footer from "../pages/shared/Footer/Footer";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
// import HomeRoute from "../route/HomeRoute";
const Main = () => {
    const location = useLocation();
    // const noHeader = location.pathname.includes('login')
    const [color,setColor] = useState('light')
   
    return (
        <div  data-theme={color}>
            <Navber color={color} setColor={setColor}></Navber>
            <Outlet></Outlet>
            <Toaster position="top-right" />
           <Footer></Footer>
        </div>
    );
};

export default Main;