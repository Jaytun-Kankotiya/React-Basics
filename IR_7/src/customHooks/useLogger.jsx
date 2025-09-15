import { use, useEffect, useState } from 'react';

function useLogger(initialValue = '', message = 'value changed to') {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    console.log(`${message}: ${value}`);
  }, [value, message]);
  return { value, setValue };
}

export default useLogger;
