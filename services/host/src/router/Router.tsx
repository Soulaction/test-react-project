import {createBrowserRouter, RouteObject} from "react-router-dom";
import {App} from "@/components/App";

const shopRoutes = await import('shop/Router');
//@ts-ignore
const adminRoutes = await import('admin/Router').then(m => m.default);
console.log(shopRoutes);

const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
        children: [
            ...shopRoutes.default,
            ...adminRoutes
        ]
    }
];

export const router = createBrowserRouter(routes);