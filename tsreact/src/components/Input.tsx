import React, { useRef, useState } from "react";

const Input = () => {
  const [name, setName] = useState("");
  const ref = useRef<HTMLInputElement>(null);
  return (
    <input
      ref={ref}
      value={name}
      onChange={(e) => setName(e.target.value)}
    ></input>
  );
};

export default Input;
