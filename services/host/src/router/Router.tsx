import {createBrowserRouter, RouteObject} from "react-router-dom";
import {App} from "@/components/App";
// @ts-ignore
import shopRoutes from 'shop/Router';
// @ts-ignore
import adminRoutes from 'admin/Router';
console.log(adminRoutes)
// console.log(adminRoutes)

const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
        children: [
            // ...shopRoutes,
            // ...adminRoutes
        ]
    }
];

export const router = createBrowserRouter(routes);