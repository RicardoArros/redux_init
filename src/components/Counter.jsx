import { useState } from 'react';

const Counter = () => {
  // State: a counter value
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // View: the UI definition
  return (
    <div>
      <p>Value: {counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
