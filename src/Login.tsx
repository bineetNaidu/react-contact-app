import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css';

const Login: React.FC = () => {
  return (
    <form className="login">
      <h1>Login</h1>
      <TextField margin="normal" fullWidth label="Email" type="email" />
      <TextField margin="normal" fullWidth label="Password" type="password" />
      <Button variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};

export default Login;
