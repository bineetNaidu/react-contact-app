import React from 'react';
import logo from './logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Button from '@material-ui/core/Button';
import { User } from './Types/User';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { projectAuth } from './firebase';

const Header: React.FC<{ user: User | null }> = ({ user }) => {
  return (
    <div className="header">
      <Link to="/" className="header__brand">
        <img src={logo} alt="brandlogo" />
        <h1>React Contact App</h1>
      </Link>

      <div className="header__ctx">
        {user ? (
          <>
            <Link to="/contacts">
              <Button variant="outlined" color="primary">
                {user.username ? user.username : user.email}
              </Button>
            </Link>
            <Button
              variant="outlined"
              color="primary"
              endIcon={<ExitToAppIcon />}
              onClick={() => projectAuth.signOut()}
            >
              Logout
            </Button>
          </>
        ) : (
          <Link to="/login">
            <Button
              variant="outlined"
              color="primary"
              endIcon={<PersonAddIcon />}
            >
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
