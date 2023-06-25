import { NavLink, Outlet, Link } from "react-router-dom";
import { FaHome, FaUtensils, FaBook, FaWallet } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useCart from "../hooks/useCart";




const DashBoard = () => {
    const [cart] = useCart()
    console.log(cart)
    const { user } = useContext(AuthContext)
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>

            <div className="drawer-side bg-[#afb0a5]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu block  w-80 h-full  text-base-content">
                    <div className='flex flex-col items-center mt-6 -mx-2'>
                        <div>
                            <img
                                className='object-cover w-24 h-24 mx-2 rounded-full'
                                src={user?.photoURL}
                                alt='avatar'
                                referrerPolicy='no-referrer'
                            />
                        </div>
                        <div>
                            <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
                                {user?.displayName}
                            </h4>
                        </div>
                        <div>
                            <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline mb-10'>
                                {user?.email}
                            </p>
                        </div>
                    </div>

                    <div className=" ml-8">
                        <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl font-semibold"><NavLink to="/dashboard/selectclass"> Select Classes</NavLink></li>
                        <li className="bg-slate-200 mt-2 w-60   text-slate-500 rounded-xl font-semibold"><NavLink to="/dashboard/myclass">My Classes</NavLink></li>
                        <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/history">Payment History</NavLink></li>
                        <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/instructor">Instructor</NavLink></li>
                        <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/addclass">Add Class</NavLink></li>
                        <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/ins-myclass">My Class</NavLink></li>
          

                        <div className="divider"></div>
                        <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/">Home</NavLink> </li>
                        <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/classes"> Our Classes</NavLink></li>
                        <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/instructor">Our Instructor</NavLink></li>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;