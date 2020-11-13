import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Login from './Login';
import { projectAuth } from './firebase';
import { User } from './Types/User';
import Contact from './Contact';
// Statics
import './App.css';

const App: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    projectAuth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const user: User = {
          email: authUser.email,
          username: authUser.displayName,
        };
        setUser(user);
        history.push('/contacts');
      } else {
        setUser(null);
      }
    });
  }, [setUser, history]);

  return (
    <div className="app">
      <Header user={user} />
      <Switch>
        <AnimatePresence>
          <Route exact path="/login" component={Login} />
          {user ? (
            <>
              <Route exact path="/contacts" component={Contact} />
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </AnimatePresence>
      </Switch>
    </div>
  );
};

export default App;
