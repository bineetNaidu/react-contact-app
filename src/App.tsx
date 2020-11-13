import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Login from './Login';
// Statics
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <AnimatePresence>
          <Route exact path="/login" component={Login} />
        </AnimatePresence>
      </Switch>
    </div>
  );
};

export default App;
