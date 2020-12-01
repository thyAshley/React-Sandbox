import React from "react";

import GlobalStyle from "./styles/GlobalStyle";
import AboutUs from "./screens/AboutUs";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
