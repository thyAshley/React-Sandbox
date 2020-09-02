import React, { useState } from "react";

const Toggle = () => {
  const [hide, setHide] = useState(true);

  const toggle = () => {
    setHide((prevState) => !prevState);
  };
  return (
    <div>
      {hide && <h1>Hide Me</h1>}
      <button onClick={toggle}>Show/Hide</button>
    </div>
  );
};

export default Toggle;
