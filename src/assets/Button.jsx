import React, { useState } from "react";

const Button = ({ str, classN, fn, Kfn, event }) => {
  return (
    <button
      onKeyDown={(e) => Kfn(e)}
      className={classN}
      onClick={() => fn(str)}
    >
      {str}
    </button>
  );
};
export default Button;
