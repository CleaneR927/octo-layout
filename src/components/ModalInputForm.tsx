import React, { useState } from 'react';
import useValidation from '../hook/useValidation';

interface ModalInputFormProps {
  onSubmit: (title: string) => void;
  buttonLabel: string;
}

const ModalInputForm: React.FC<ModalInputFormProps> = ({
  onSubmit,
  buttonLabel
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const validateInput = (value: string) => {
    if (value.trim().length <= 3) {
      return { isValid: false, errorMessage: 'Должно быть больше 3 символов.' };
    }
    return { isValid: true, errorMessage: '' };
  };

  const { isValid, errorMessage } = useValidation(inputValue, validateInput);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue) {
      onSubmit(inputValue);
      setInputValue('');
      setIsTouched(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsTouched(true);
  };

  return (
    <form className="modal__form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter task name"
          required
        />
        {isTouched && errorMessage && (
          <span className="form__error-message">{errorMessage}</span>
        )}
      </div>

      <button
        className="modal__button--submit"
        type="submit"
        disabled={!isValid}
      >
        {buttonLabel}
      </button>
    </form>
  );
};

export default ModalInputForm;
