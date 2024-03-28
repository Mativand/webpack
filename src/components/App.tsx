import {FC, useState} from 'react';
import {Link, Outlet} from "react-router-dom";

export const App: FC = () => {
    return (
        <div>
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
            <div>{__PLATFORM__}</div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};
