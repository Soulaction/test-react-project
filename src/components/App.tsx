import s from "./App.module.scss";
import {useState} from "react";
import {Link, Outlet} from "react-router-dom";

export const App = () => {
    const [count, setCount] = useState<number>(0)


    return (
        <div>
            <h1>PLATFORM={__PLATFORM__}</h1>
            <Link to="/shop">shop1</Link>
            <br/>
            <Link to="/about">about</Link>
            {count}
            <button className={s.button} onClick={() => setCount(count + 1)}>++</button>
            <Outlet/>
        </div>
    );
};