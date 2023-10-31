import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import LoginForm from "../Page/AuthForm/LoginForm";
import RegisterForm from "../Page/AuthForm/RegisterForm";
import Checkout from "../Page/CheckOut/Checkout";
import Bookings from "../Page/CheckOut/Bookings";
import PrivateRoute from "../Page/PrivateRoute/PrivateRoute";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LoginForm></LoginForm>
            },
            {
                path: '/register',
                element: <RegisterForm></RegisterForm>
            },
            {
                path: '/checkout/:id',
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <Checkout></Checkout> ,
            },
            {
                path: '/bookings',
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
    }
])

export default Route;