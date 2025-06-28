import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {About} from "./page/About";
import {Suspense} from "react";
import {Shop} from "@/page/Shop";

const root = document.getElementById("root");

if(!root) {
    throw new Error('root not found')
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/About',
                element: <Suspense fallback={'loading...'}><About/></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={'loading...'}><Shop/></Suspense>
            }
        ]
    }
])

container.render(<RouterProvider router={router}/>)