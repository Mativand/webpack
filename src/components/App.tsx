import {FC, useState} from 'react';
import s from './App.module.scss'

export const App: FC = () => {
    const [count, setCount] = useState(0)
    return (
        <div onClick={() => setCount(count + 1)}>
            {count}
            <button className={s.button}>Click</button>
        </div>
    );
};
