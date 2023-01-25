import React from 'react'

export const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }: {value: number, onIncrementAsync: () => void, onIncrement: () => void, onDecrement: () => void}) =>
  <div>
    <button onClick={onIncrementAsync}>
      Increment after 1 second
    </button>
    <button onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <hr />
    <div>
      Clicked: {value} times
    </div>
  </div>;
