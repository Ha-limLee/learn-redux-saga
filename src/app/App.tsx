import React from 'react';
import { Counter } from '../features/counter/Counter';
import { store } from "./store.js";
import { useAppSelector, useAppDispatch } from './hooks';
import { selectCount } from '../features/counter/counterReducer';

export const App = () => {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    return (
        <>
            <Counter
                value={count}
                onIncrement={() => dispatch({ type: 'INCREMENT' })}
                onDecrement={() => dispatch({ type: 'DECREMENT' })}
                onIncrementAsync={() => dispatch({ type: 'INCREMENT_ASYNC' })} />
        </>);
};