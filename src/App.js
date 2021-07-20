import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import CivilizationLanding from "./components/landingpage/CivilizationLanding";
import CivilizationList from "./components/CivilizationList";
import CreateCivilization from "./components/CreateCivilization";
import EditCivilization from "./components/EditCivilization";
import ViewCivilization from "./components/ViewCivilization";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CivilizationLanding} />
        <>
          <Navbar />
          <Route path="/list" exact component={CivilizationList} />
          <Route path="/create" exact component={CreateCivilization} />
          <Route path="/edit/:id" exact component={EditCivilization} />
          <Route path="/view/:id" exact component={ViewCivilization} />
        </>
      </Switch>
    </Router>
  );
}

export default App;
