import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";

import SignUp from "../pages/SignUp/SignUp";
import Instructor from "../pages/Instructor/Instructor";
import InstructorAll from "../pages/InstructorAll/InstructorAll";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layout/Dashboard";
import EnrolledClass from "../pages/Dashboard/SelectClass/EnrolledClass/EnrolledClass";
import PrivateRoute from "./PrivateRoute";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import History from "../pages/Dashboard/History/History";
import Image from "../pages/Image/Image";
import AddClass from "../Dashboard/Instructor/AddClass/AddClass";
import MyClass from "../Dashboard/Instructor/MyClass/MyClass";
import Login from "../pages/Login/Login";
import ManegeClass from "../Dashboard/Admin/ManegeClass/ManegeClass";
import SelectClass from "../pages/Dashboard/SelectClass/SelectClass";
import ManegeUser from "../Dashboard/Admin/ManegeUser";
import DashBoardHome from "../Dashboard/DashboardHome/DashboardHome";
import FeadBack from "../Dashboard/Admin/FeadBack";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import Blog from "../pages/Blog/Blog";
import Gallary from "../pages/Gallary/Gallary";
import Contact from "../pages/Contact/Contact";
import Team from "../pages/Team/Team";
import About from "../pages/About/About";






const router = createBrowserRouter([
    {
        path:'/',
        element:<Main ></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            },
            {
                path:'instructor',
                element:<Instructor></Instructor>,
              
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            },
            {
                path:'gallary',
                element:<Gallary></Gallary>
            },
            {
                path:'team',
                element:<Team></Team>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'All-instructor',
                element:<InstructorAll></InstructorAll>,
                // loader:()=> fetch('https://b7a12-summer-camp-server-side-jewelrana3.vercel.app/instructorAll')
            
            },
            {
                path:'classes',
                element:<Classes></Classes>
            },
            {
                path:'image',
                element:<Image></Image>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<DashBoardHome></DashBoardHome>
            },
            {
                path:'selectclass',
                element:<SelectClass></SelectClass>
               
             
            },
            {
                path:'inrollclass/:id',
                element:<EnrolledClass></EnrolledClass>,
                loader:({params}) => fetch(`https://b7a12-summer-camp-server-side-jewelrana3.vercel.app/popular/${params.id}`)
            },
            {
                path:'myclass',
                element:<MyClasses></MyClasses>
            },
            {
                path:'history',
                element:<History></History>
            },
           {
            path:'addclass',
            element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
           },
          {
            path:'ins-myclass',
            element:<InstructorRoute><MyClass></MyClass></InstructorRoute>
          },
          {
            path : '/dashboard/feadback/:id',
            element : <FeadBack></FeadBack>
          },
          {
            path:'manegeclass-admin',
            element:<AdminRoute><ManegeClass></ManegeClass></AdminRoute>
          },
          {
            path:'manegeuser',
            element:<AdminRoute><ManegeUser></ManegeUser></AdminRoute>
          }
    
        ]   
    }
])

export default router;