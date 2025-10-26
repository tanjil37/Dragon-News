import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

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
            Component: CategoryNews
        },


    ]}
])

export default router;