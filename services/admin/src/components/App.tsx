import {Outlet} from 'react-router-dom'

export const App = () => {

    return (
        <div>
            <h1>ADMIN</h1>
            <Outlet></Outlet>
        </div>
    );
};