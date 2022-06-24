const { useState, useCallback } = require('react');

const useInput = (initValue: string) => {
  const [values, setValues] = useState(initValue);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setValues({ ...values, [name]: value });
    },
    [values],
  );
  return { values, setValues, onChange };
};
export default useInput;
