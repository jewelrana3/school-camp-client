// import { NavLink, Outlet, Link } from "react-router-dom";
// import { FaHome, FaUtensils, FaBook, FaWallet } from 'react-icons/fa';
// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";
// import useCart from "../hooks/useCart";
// import useUser from "../hooks/useUser";




// const DashBoard = () => {
//     const [users] = useUser();
//     const { user } = useContext(AuthContext)
//     const currentUser = users.find((item) => item.email === user?.email)


//     return (
//         <div className="drawer lg:drawer-open">
//             <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//             <div className="drawer-content flex flex-col items-center justify-center">
//                 <Outlet></Outlet>
//                 <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
//             </div>

//             <div className="drawer-side bg-[#afb0a5]">
//                 <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//                 <ul className="menu block  w-80 h-full  text-base-content">
//                     <div className='flex flex-col items-center mt-6 -mx-2'>
//                         <div>
//                             <img
//                                 className='object-cover w-24 h-24 mx-2 rounded-full'
//                                 src={user?.photoURL}
//                                 alt='avatar'
//                                 referrerPolicy='no-referrer'
//                             />
//                         </div>
//                         <div>
//                             <h4 className='mx-2 mt-2 font-medium text-gray-800  hover:underline'>
//                                 {user?.displayName}
//                             </h4>
//                         </div>
//                         <div>
//                             <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline mb-10'>
//                                 {user?.email}
//                             </p>
//                         </div>
//                     </div>

//                     <div className=" ml-8">
//                         {
//                             currentUser?.role === 'instructor' && (
//                                 <>
//                                     <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/">Instructor</NavLink></li>
//                                     <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/addclass">Add Class</NavLink></li>
//                                     <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/ins-myclass">My Class</NavLink></li>
//                                 </>
//                             )}

//                         {
//                             currentUser?.role === 'student' && (
//                                 <>
//                                     <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/selectclass">Select Class</NavLink></li>
//                                     <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/myclass">My Class</NavLink></li>
//                                     <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/history">Payment history</NavLink></li>
//                                 </>
//                             )
//                         }

//                         {
//                             currentUser?.role === 'admin' && (
//                                 <>
//                                     <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl font-semibold"><NavLink to="/dashboard/manegeclass-admin">Manege Class</NavLink></li>
//                                     <li className="bg-slate-200 mt-2 w-60   text-slate-500 rounded-xl font-semibold"><NavLink to="/dashboard/manegeuser">Manege User</NavLink></li>

//                                 </>
//                             )
//                         }





//                         <div className="divider"></div>
//                         <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/">Home</NavLink> </li>
//                         {/* <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/classes"> Our Classes</NavLink></li>
//                         <li className="bg-slate-200 mt-2 w-60  text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/instructor">Our Instructor</NavLink></li> */}
//                     </div>
//                 </ul>

//             </div>
//         </div>
//     );
// };

// export default DashBoard;


import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import useUser from "../hooks/useUser";
import DashBoardHome from "../Dashboard/DashboardHome/DashboardHome";

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    const [users] = useUser();


    const currentUser = users.find((current) => current?.email === user?.email);
    // const currentUserRole = currentUser?.role;
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
            })
    }

    const listItem =
        <>
            
                <div className="flex text-center space-x-5 ">
                    {currentUser?.role === "instructor" && (
                        <>
                            <li className="bg-slate-200 mt-2   text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/">Instructor</NavLink></li>
                            <li className="bg-slate-200 mt-2   text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/addclass">Add Class</NavLink></li>
                            <li className="bg-slate-200 mt-2   text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/ins-myclass">My Class</NavLink></li>
                        </>
                    )}
                    {currentUser?.role === "student" && (
                        <>
                            <li className="bg-slate-200 mt-2   text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/selectclass">Select Class</NavLink></li>
                            <li className="bg-slate-200 mt-2   text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/myclass">My Inroll Class</NavLink></li>
                            <li className="bg-slate-200 mt-2 text-slate-500 rounded-xl hover:text-green-400 font-semibold "><NavLink to="/dashboard/history">Payment history</NavLink></li>
                        </>
                    )}
                    {currentUser?.role === "admin" && (
                        <>
                            <li className="bg-slate-200 mt-2  text-slate-500 rounded-xl font-semibold"><NavLink to="/dashboard/manegeclass-admin">Manege Class</NavLink></li>
                            <li className="bg-slate-200 mt-2  text-slate-500 rounded-xl font-semibold"><NavLink to="/dashboard/manegeuser">Manege User</NavLink></li>

                        </>
                    )}
                </div>

        
            <li>
                <Link to="/"><span></span>Home</Link>
            </li>
            <li>
                <Link to='/'><button onClick={handleLogOut} className="btn btn-outline">Log Out</button></Link>
            </li>
        </>

    return (
        <>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar py-5  bg-blue-200">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
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
                            <a href="/" className="flex items-center">
                                <span>
                                <img
                                        className="w-8 h-8 mr-2 rounded"
                                        src="https://i.ibb.co/RD4sN8N/Untitled.png"
                                        alt=""
                                    />
                                </span>
                                <span className="text-orange-600">Sports</span>{" "}
                                <span className="text-blue-600"> Easy</span>
                            </a>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu flex items-center menu-horizontal">
                                {/* Navbar menu content here */}
                                {listItem}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  h-full bg-blue-300">
                        {/* Sidebar content here */}
                        {listItem}
                    </ul>
                </div>
            </div>
             <Outlet></Outlet>
        </>
    );
};

export default Dashboard;