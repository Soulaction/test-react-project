import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
import {Suspense} from "react";
import {AboutLazy} from "@/page/About/About.lazy";


const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'loading...'}><AboutLazy/></Suspense>
            }
        ]
    }
];

export const router = createBrowserRouter(routes);

export default routes;