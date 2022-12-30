import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import SignUp from "../components/Login/SignUp/SignUp";
import Home from "../layout/Home/Home";
import Main from "../layout/Main/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;