import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import useCart from "../../../hooks/useCart";
import { FaMoon, FaCentos } from 'react-icons/fa';


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
            .then(() => { })
            .then(error => console.log(error))
    }

    const navItem =
        <>
         
          <li className="text-white">
                <Link to="/">Home</Link>
            </li>
            <li className="text-white">
                <Link to="/instructor">Instructors</Link>
            </li>
            <li className="text-white">
                <Link to="/classes">Classes</Link>
            </li>
            <li className="text-white">
                <Link to="/dashboard">Dashboard </Link>
            </li>
          
            {user ? <div className="flex flex-col md:flex-row md:items-center mt-5 md:mt-0" ><span className="tooltip" data-tip={user?.displayName}><img className="w-12 h-12 mb-2 md:mb-0 cursor-pointer bg-cover bg-center mx-4 rounded-full" src={user?.photoURL} alt="" /></span><button onClick={handleLogOut} className="btn btn-outline btn-sm mb-2 text-white">Log Out</button></div> : <Link to='/login'>
                <button className="btn btn-outline btn-sm text-white">login</button>
            </Link>}
        </>
    // <div className="navItem gap-6 lg:flex ">

    //     <li><Link className='mr-6 text-xl ' onClick={handleColor}>{<FaMoon className="sm:hidden"></FaMoon>}</Link></li>
    //     <li><NavLink to='/'>Home</NavLink></li>
    //     <li><NavLink to='/All-instructor'>Instructor</NavLink></li>
    //     <li><NavLink to='/classes'>Classes</NavLink></li>
    //     <li><NavLink to='/dashboard'>Dashboard</NavLink></li>


    // </div>

    return (
        // <div className="navbar bg-slate-600 fixed z-10 mx-auto opacity-80 text-white w-[95%]">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52 ">
        //                 {navItem}
        //             </ul>
        //         </div>

        //         <div className="flex items-center">
        //             <span>
        //                 <img style={{ borderRadius: '50px' }} className="w-12" src="https://i.ibb.co/chxbvxW/Untitled2.png" alt="photo" />
        //             </span>

        //             <span className="text-orange-600 ml-4 text-2xl">Sports</span>{" "}
        //             <span className="text-blue-600 text-2xl ml-2">Masic</span>
        //         </div>
        //     </div>

        //     <div className="navbar-end">
        //         <div className="navbar-center hidden lg:flex ">
        //             <ul className="menu menu-horizontal px-1 ">
        //                 {navItem}
        //             </ul>
        //         </div>
        //         {
        //             user?.email ? <>
        //                 <img title={user?.displayName} style={{ width: '40px', borderRadius: '50%' }} src={user?.photoURL} alt="" />
        //                 <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
        //             </> : <>
        //                 <NavLink to="/login" className="btn btn-error">Login</NavLink>
        //             </>
        //         }
        //     </div >
        // </div >
        <div className="drawer">
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
                <ul className="menu p-4 w-80  h-full bg-slate-400 ">
                    {/* Sidebar content here */}
                    {navItem}
                </ul>
            </div>
        </div>
    );
};

export default Navber;