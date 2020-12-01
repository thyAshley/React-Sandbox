import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import AboutUs from "./screens/AboutUs";
import Nav from "./components/Nav";
import OurWork from "./screens/OurWork";
import ContactUs from "./screens/ContactUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <GlobalStyle />
        <Switch>
          <Route path="/work" component={OurWork} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/" component={AboutUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
