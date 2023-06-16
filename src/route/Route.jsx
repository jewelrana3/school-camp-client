import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructor from "../pages/Instructor/Instructor";
import InstructorAll from "../pages/InstructorAll/InstructorAll";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layout/Dashboard";
import SelectClass from "../pages/Dashboard/SelectClass/SelectClass";
// import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
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
                path:'',
                element:<Instructor></Instructor>
            },
            {
                path:'instructor',
                element:<InstructorAll></InstructorAll>
            },
            {
                path:'classes',
                element:<Classes></Classes>
            }
        ]
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'selectclass',
                element:<SelectClass></SelectClass>
            }
        ]
    }
])

export default router;