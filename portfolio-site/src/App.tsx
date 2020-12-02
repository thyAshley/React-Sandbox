import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import AboutUs from "./screens/AboutUs";
import Nav from "./components/Nav";
import OurWork from "./screens/OurWork";
import ContactUs from "./screens/ContactUs";
import MovieDetail from "./screens/MovieDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <GlobalStyle />
        <Switch>
          <Route path="/work" exact component={OurWork} />
          <Route path="/work/:id" component={MovieDetail} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/" component={AboutUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
