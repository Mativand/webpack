import {FC, useState} from 'react';

export const App: FC = () => {
    const [count, setCount] = useState(0)
    return (
        <div onClick={() => setCount(count + 1)}>
            {count}
        </div>
    );
};
