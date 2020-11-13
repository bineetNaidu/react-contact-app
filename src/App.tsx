import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
// Statics
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <AnimatePresence></AnimatePresence>
      </Switch>
    </div>
  );
};

export default App;
