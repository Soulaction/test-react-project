import {Link, Outlet} from 'react-router-dom'
import s from './App.module.scss'

export const App = () => {

    return (
        <div>
            <h1>HOST2323</h1>
            <Link to={'/about'}>about</Link>
            <Link to={'/shop'}>shop</Link>
            <Outlet></Outlet>
        </div>
    );
};