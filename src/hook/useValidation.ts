import { useEffect, useState } from 'react';

const useValidation = (
  value: string,
  validationFn: (value: string) => { isValid: boolean; errorMessage: string }
) => {
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const { isValid, errorMessage } = validationFn(value);
    setIsValid(isValid);
    setErrorMessage(errorMessage);
  }, [value, validationFn]);

  return { isValid, errorMessage };
};

export default useValidation;
