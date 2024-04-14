import React, { useEffect, useRef } from 'react';

const InputFiled = function () {
  const textFieldRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
  };

  useEffect(() => {
    //focus the text filed when component mounts
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  });

  return (
    <div>
      <input
        className={` text-black`}
        ref={textFieldRef}
        type='text'
        // value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputFiled;
