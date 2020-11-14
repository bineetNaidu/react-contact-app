import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { projectAuth } from './firebase';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Login.css';
import { containerVariants } from './variants';

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const handleSignEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    if (email && password) {
      try {
        const authUser = await projectAuth.signInWithEmailAndPassword(
          email,
          password
        );
        authUser && history.push('/');
      } catch (e) {
        alert(e.message);
      }
    }
  };

  return (
    <motion.form
      className="login"
      onSubmit={(e) => {
        e.preventDefault();
        handleSignEmailAndPassword(email, password);
      }}
      variants={containerVariants}
      initial="hidden"
      exit="exit"
      animate="visible"
    >
      <h1>Login</h1>
      <TextField
        margin="normal"
        fullWidth
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPass(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </motion.form>
  );
};

export default Login;
