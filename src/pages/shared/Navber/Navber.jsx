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

    const navItem = <div className="navItem gap-6 lg:flex ">

        <li><Link className='mr-6 text-xl ' onClick={handleColor}>{<FaMoon className="sm:hidden"></FaMoon>}</Link></li>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/All-instructor'>Instructor</NavLink></li>
        <li><NavLink to='/classes'>Classes</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>


    </div>

    return (
        <div className="navbar bg-slate-600 fixed z-10 max-w-screen-xl mx-auto opacity-80 text-white mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52 ">
                        {navItem}
                    </ul>
                </div>
                
                <div className="flex items-center">
                    <span>
                        <img style={{ borderRadius: '50px' }} className="w-12" src="https://i.ibb.co/chxbvxW/Untitled2.png" alt="photo" />
                    </span>

                    <span className="text-orange-600 ml-4 text-2xl">Sports</span>{" "}
                    <span className="text-blue-600 text-2xl ml-2">Masic</span>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 ">
                        {navItem}
                    </ul>
                </div>
                {
                    user?.email ? <>
                        <img title={user?.displayName} style={{ width: '40px', borderRadius: '50%' }} src={user?.photoURL} alt="" />
                        <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                    </> : <>
                        <NavLink to="/login" className="btn btn-error">Login</NavLink>
                    </>
                }
            </div >
        </div >
    );
};

export default Navber;