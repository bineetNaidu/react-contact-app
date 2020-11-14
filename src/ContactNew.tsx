import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { User } from './Types/User';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './ContactNew.css';
import { useHistory } from 'react-router-dom';
import { projectFirestore, timestamp } from './firebase';

interface Props {
  user: User;
  docId: string;
}

const ContactNew: React.FC<Props> = ({ user, docId }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [phNum, setPhNum] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isFav, setIsFav] = useState(false);

  const handleCreate = (e: any) => {
    e.preventDefault();
    if (username && phNum) {
      projectFirestore
        .collection(user.email!)
        .doc(docId)
        .collection('contacts')
        .add({
          image_url: imageUrl,
          ph_number: phNum,
          username,
          isFavourite: isFav,
          createdAt: timestamp,
        })
        .then(() => {
          history.push('/contacts');
        });
    } else {
      alert('Please Fill out the fields');
    }
  };

  return (
    <form className="contactNew" onSubmit={handleCreate}>
      <h2>Create new Contact</h2>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Ph.Number"
        value={phNum}
        type="number"
        onChange={(e) => setPhNum(e.target.value)}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Avatar"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        margin="normal"
        fullWidth
      />
      <div>
        <Button variant="contained" color="primary" type="submit">
          Create
        </Button>
        <FormControlLabel
          control={
            <Checkbox checked={isFav} onChange={() => setIsFav(!isFav)} />
          }
          label="is Favarite"
          labelPlacement="end"
        />
      </div>
    </form>
  );
};

export default ContactNew;
