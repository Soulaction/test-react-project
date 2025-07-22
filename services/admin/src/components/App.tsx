import {Outlet} from 'react-router-dom'
import {useEffect, useState} from "react";

export const App = () => {
    const [value, setValue] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setValue('value')
        }, 1000)
    }, []);


    return (
        <div>
            {value && <div data-testid="togle-div">isData</div>}
            <h1>ADMIN</h1>
            <button data-testid="togle-btn" onClick={() => setValue((pre: null | string) => pre ? null : 'text')}></button>
            <Outlet></Outlet>
        </div>
    );
};

