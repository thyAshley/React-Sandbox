import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import GlobalStyle from "./styles/GlobalStyle";
import AboutUs from "./screens/AboutUs";
import Nav from "./components/Nav";
import OurWork from "./screens/OurWork";
import ContactUs from "./screens/ContactUs";
import MovieDetail from "./screens/MovieDetail";
import ScrollTop from "./Utils/ScrollTop";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/work" exact component={OurWork} />
          <Route path="/work/:id" component={MovieDetail} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/" component={AboutUs} />
        </Switch>
      </AnimatePresence>
      <ScrollTop />
    </div>
  );
}

export default App;
