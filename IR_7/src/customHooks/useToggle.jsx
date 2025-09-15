import { useState } from 'react';

function useToggle(initValue = false) {
  const [value, setValue] = useState(initValue);

  const toggle = () => {
    setValue((preValue) => !preValue);
  };

  return { toggle, value };
}

export default useToggle;
