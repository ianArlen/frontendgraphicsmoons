import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DonutPage from "./Components/DonutPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/donut" component={DonutPage} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
