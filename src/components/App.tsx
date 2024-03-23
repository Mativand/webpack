import {FC, useState} from 'react';
import {Link, Outlet} from "react-router-dom";

export const App: FC = () => {
    const [count, setCount] = useState(0)
    return (
        <div onClick={() => setCount(count + 1)}>
            <nav>
                <ul>
                    <li>
                        <Link to={'about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'contacts'}>Contacts</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};
