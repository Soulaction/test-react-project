import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
import {Suspense} from "react";
import {About} from "@/page/About";


const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'loading...'}><About/></Suspense>
            }
        ]
    }
];

export const router = createBrowserRouter(routes);

export default routes;