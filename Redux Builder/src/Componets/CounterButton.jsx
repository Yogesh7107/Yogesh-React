import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleAdd, handleReduce } from '../Redux/Counter/Action';

const CounterButtons = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count); // Get the current count from Redux

  return (
    <div>
      <button onClick={() => dispatch(handleAdd(1))}>ADD</button>
      <button onClick={() => dispatch(handleReduce(1))} disabled={count <= 0}>
        REDUCE
      </button>
    </div>
  );
};

export default CounterButtons;
