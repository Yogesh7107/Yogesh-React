import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
  const count = useSelector(state => state.counter.count);
  const theme = useSelector(state => state.theme.theme);

  return (
    <div className={theme === 'light' ? 'light_theme' : 'dark_theme'}>
      <h1>Counter</h1>
      <h2>{count}</h2>
    </div>
  );
};

export default CounterValue;
