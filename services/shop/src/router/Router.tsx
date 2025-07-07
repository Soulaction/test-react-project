import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App";
import {Suspense} from "react";
import {Shop} from "@/page/Shop";


const routes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/shop',
                element: <Suspense fallback={'loading...'}><Shop/></Suspense>
            }
        ]
    }
];

export const router = createBrowserRouter(routes);

export default routes;