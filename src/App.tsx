import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// Statics
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Switch>
        <AnimatePresence>
          <h1>Hey Let Build a React Contact App</h1>
        </AnimatePresence>
      </Switch>
    </div>
  );
};

export default App;
