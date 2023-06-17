import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUtensils, FaUsers, FaBook, FaWallet } from 'react-icons/fa';
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
                    <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/selectclass"> <FaUtensils></FaUtensils>Select Classes</NavLink></li>
                    <li><NavLink to="/dashboard/manegeitem"><FaWallet></FaWallet> Manage Items</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                    <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"> Our Classes</NavLink></li>
                    <li><NavLink to="/order/salad">Our Instructor</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;