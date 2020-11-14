import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFirestore from './hooks/useFirestore';
import { User } from './Types/User';

interface Props {
  user: User;
  docId: string;
}

const Contact: React.FC<Props> = ({ user, docId }) => {
  const { docs } = useFirestore(user.email!, docId);

  return (
    <div>{docs && <Link to="/contacts/new">Create a new Contact</Link>}</div>
  );
};

export default Contact;
