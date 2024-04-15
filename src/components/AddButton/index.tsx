import React from 'react';

interface AddButtonProps {
  onAddButtonClicked: () => void;
}
const AddButton: React.FC<AddButtonProps> = function ({ onAddButtonClicked }) {
  return (
    <div>
      <button onClick={onAddButtonClicked}>+</button>
    </div>
  );
};

export default React.memo(AddButton);
