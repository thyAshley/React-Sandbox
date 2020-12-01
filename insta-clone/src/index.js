import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [language, setLanguage] = useState("Javascript");
  const [yearsOfExp, setYearsOfExp] = useState(0);
  return (
    <>
      <button onClick={() => setLanguage("c#")}>Change Language</button>
      <input type="number" onChange={(e) => setYearsOfExp(e.target.value)} />
      <p>
        I am Learning {language} for {yearsOfExp}
      </p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
