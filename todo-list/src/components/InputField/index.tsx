import { RootState } from '@/store';
import { setText } from '@/store/features/textSlice';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styles from './InputField.module.css';

const InputFiled = function () {
  const text = useSelector((state: RootState) => state.text.value);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const textFieldRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setText(value));
  };

  const onAddButtonClicked = () => {
    setOpen(true);
  };

  useEffect(() => {
    //focus the text filed when component mounts
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  });

  return (
    <div>
      <div className={styles.inputField}>
        <h2>{t("Add todo's:")}</h2>
        <input
          ref={textFieldRef}
          type='text'
          value={text}
          onChange={handleChange}
        />
        <button onClick={onAddButtonClicked}>+</button>
      </div>
      {open && <div className={styles.modal}>hello</div>}
    </div>
  );
};

export default InputFiled;
