import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

function CounterFeature() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  const handleIncreaseOnClick = () => {
    const action = increase();
    dispatch(action);
  };

  const handleDecreaseOnClick = () => {
    const action = decrease();
    dispatch(action);
  };

  return (
    <div>
      Count: {count}
      <div>
        <button onClick={handleIncreaseOnClick}>Increase</button>
        <button onClick={handleDecreaseOnClick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;
