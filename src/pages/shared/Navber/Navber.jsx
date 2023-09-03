import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import useCart from "../../../hooks/useCart";
import {FaMoon } from 'react-icons/fa';



const Navber = ({ color, setColor }) => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleColor = () => {
       

        if (color == "light") {
            setColor("dark")

        }
        else {
            setColor("light")

        }
    }

    const handleLogOut = () => {
        logOut()
            .then(error => console.log(error))
    }

    const navItem =
        <>
            <li onClick={()=>handleColor(setColor(!color))}><Link><FaMoon/></Link></li>
            <li className="text-white">
                <Link to="/">Home</Link>
            </li>
            <li className="text-white">
                <Link to="/All-instructor">Instructor</Link>
            </li>
            <li className="text-white">
                <Link to="/gallary">Gallary</Link>
            </li>
            <li className="text-white">
                <Link to="/classes">Classes</Link>
            </li>
            <li className="text-white">
                <Link to="/dashboard">Dashboard </Link>
            </li>

            {user ? <div className="flex flex-col md:flex-row md:items-center mt-5 md:mt-0" ><span className="tooltip" data-tip={user?.displayName}><img className="w-12 h-12 mb-2 md:mb-0 cursor-pointer bg-cover bg-center mx-4 rounded-full" src={user?.photoURL} alt="" /></span><button onClick={handleLogOut} className="btn btn-outline btn-sm mb-2 text-white">Log Out</button></div> : <Link to='/login'>
                <button className="btn btn-outline btn-sm text-white mb-2">login</button>
            </Link>}
        </>

    return (

        <div className="drawer z-10">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar py-5  bg-slate-600 ">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-6 h-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-lg md:text-xl lg:text-2xl font-semibold">
                        <a href="" className="flex items-center">
                            <span>
                                <img style={{ borderRadius: '50px' }} className="w-12" src="https://i.ibb.co/chxbvxW/Untitled2.png" alt="photo" />
                            </span>
                            <span className="text-orange-600 mr-2 ml-2"> Sports </span>
                            <span className="text-blue-600"> Masic</span>
                        </a>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu items-center menu-horizontal">
                            {/* Navbar menu content here */}
                            {navItem}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
            </div>
            <div className="drawer-side z-50">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-40 rounded h-80% bg-slate-400 ">
                    {/* Sidebar content here */}
                    {navItem}
                </ul>
            </div>
        </div>
    );
};

export default Navber;