import React from "react";
import { MoonLoader } from "react-spinners";

const Fallback = function () {
  return (
    <div>
      <MoonLoader color="#fff" />
    </div>
  );
};

export default React.memo(Fallback);
