import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import LoginForm from "../Page/AuthForm/LoginForm";
import RegisterForm from "../Page/AuthForm/RegisterForm";

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
            },{
                path: '/registration',
                element: <RegisterForm></RegisterForm>
            }
        ]
    }
])

export default Route;