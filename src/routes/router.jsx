import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Registration from "../pages/Register";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
            index: true,
            Component: Home
        },
        {
            path: '/category/:id',
            Component: CategoryNews,
            loader: () => fetch("/news.json")
        },
    ]},
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: '/auth/login',
                element: <Login/>,
            },
             {
                path: '/auth/register',
                element: <Register/>,
            },

        ]
    }
])

export default router;