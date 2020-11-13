import React from 'react';
import { User } from './Types/User';

interface Props {
  user: User;
}

const Contact: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <h1>Contact page</h1>
    </div>
  );
};

export default Contact;
