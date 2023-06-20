import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUtensils, FaBook, FaWallet } from 'react-icons/fa';
// import useCart from "../hooks/useCart";




const DashBoard = () => {
    // const [cart] = useCart()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  text-base-content">
                  
                    <li><NavLink to="/dashboard/selectclass"> <FaUtensils></FaUtensils>Select Classes</NavLink></li>
                    <li><NavLink to="/dashboard/myclass"><FaWallet></FaWallet>My Classes</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaBook></FaBook>Payment History</NavLink></li>
                   
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/classes"> Our Classes</NavLink></li>
                    <li><NavLink to="/instructor">Our Instructor</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;