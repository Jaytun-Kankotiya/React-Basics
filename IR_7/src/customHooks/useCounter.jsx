import { use, useState } from 'react';

function useCounter(init = 0) {
  const [counter, setCounter] = useState(init);

  function increment() {
    setCounter((count) => count + 1);
  }

  function decrement() {
    setCounter((count) => count - 1);
  }

  function reset() {
    setCounter(init);
  }
  return { counter, increment, decrement, reset };
}

export default useCounter;
