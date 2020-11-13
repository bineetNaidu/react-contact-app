import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Login from './Login';
import { projectAuth } from './firebase';
import { User } from './Types/User';
// Statics
import './App.css';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log('redenring');
    projectAuth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const user: User = {
          email: authUser.email,
          username: authUser.displayName,
        };
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [setUser]);

  return (
    <div className="app">
      <Header user={user} />
      <Switch>
        <AnimatePresence>
          <Route exact path="/login" component={Login} />
        </AnimatePresence>
      </Switch>
    </div>
  );
};

export default App;
