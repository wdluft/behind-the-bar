import { Switch, Route } from 'react-router-dom';
import React from 'react';
import DrinksForm from './DrinkForm';
import Nav from './Nav';
import About from './About';
import Home from './home/Home';
import Drink from './Drink';
import AddDrink from './AddDrink';
import DrinksByTag from './DrinksByTag';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route path="/drinks/:drinkid">
        <Drink />
      </Route>
      <Route path="/tags/:tagid">
        <DrinksByTag />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/addDrink">
        <AddDrink />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default App;
