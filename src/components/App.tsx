import {FC, useState} from 'react';
import './App.scss';

export const App: FC = () => {
    const [count, setCount] = useState(0)
    return (
        <div onClick={() => setCount(count + 1)}>
            {count}
            <button className={'button'}>Click</button>
        </div>
    );
};
