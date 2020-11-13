import React from 'react';
import logo from './logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Button from '@material-ui/core/Button';

const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to="/" className="header__brand">
        <img src={logo} alt="brandlogo" />
        <h1>React Contact App</h1>
      </Link>

      <div className="header__ctx">
        <Link to="/login">
          <Button
            variant="outlined"
            color="primary"
            endIcon={<PersonAddIcon />}
          >
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
