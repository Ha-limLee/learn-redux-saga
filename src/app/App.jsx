import React from 'react';
import { Counter } from "../features/counter/Counter.jsx";
import { store, action } from "./store.js";

export const App = () => {
    return (
        <>
            <Counter
                value={store.getState().counter}
                onIncrement={() => action('INCREMENT')}
                onDecrement={() => action('DECREMENT')}
                onIncrementAsync={() => action('INCREMENT_ASYNC') } />
        </>);
};