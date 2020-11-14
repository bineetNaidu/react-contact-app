import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Login from './Login';
import { projectAuth, projectFirestore, timestamp } from './firebase';
import { User } from './Types/User';
import Contact from './Contact';
import ContactNew from './ContactNew';
// Statics
import './App.css';

const App: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<User | null>(null);
  const [docId, setDocId] = useState('');

  useEffect(() => {
    projectAuth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const user: User = {
          email: authUser.email,
          username: authUser.displayName,
        };
        setUser(user);
        const DB_REF = projectFirestore.collection(user.email!);
        if (DB_REF && !DB_REF.doc()) {
          await DB_REF.add({
            email: user.email,
            username: user.username || '',
            image_url: '',
            ph_number: 0,
            createdAt: timestamp,
          });
        }
        DB_REF.onSnapshot((snap) => setDocId(snap.docs[0].id));
        // history.push('/contacts');
      } else {
        setUser(null);
      }
    });
  }, [setUser, history]);

  return (
    <div className="app">
      <Header user={user} />
      <Switch>
        <AnimatePresence exitBeforeEnter>
          <Route
            exact
            path="/login"
            component={Login}
            key={history.location.key}
          />
          {user ? (
            <>
              <Route
                exact
                path="/contacts"
                render={() => (
                  <Contact
                    user={user}
                    docId={docId}
                    key={history.location.key}
                  />
                )}
              />
              <Route
                exact
                path="/contacts/new"
                render={() => (
                  <ContactNew
                    user={user}
                    key={history.location.key}
                    docId={docId}
                  />
                )}
              />
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
