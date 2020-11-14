import React from 'react';
import { Link } from 'react-router-dom';
import useFirestore from './hooks/useFirestore';
import { User } from './Types/User';
import List from '@material-ui/core/List';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ContactListItem from './ContactListItem';
import './Contact.css';

interface Props {
  user: User;
  docId: string;
}

const Contact: React.FC<Props> = ({ user, docId }) => {
  const { docs } = useFirestore(user.email!, docId);
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="contact">
      <Link to="/contacts/new" className="contact__floatingCtx">
        <Fab color="primary" aria-label="Create a new Contact">
          <AddIcon />
        </Fab>
      </Link>

      <List dense className="contact__lists">
        {docs.map((c) => (
          <ContactListItem
            {...c}
            expanded={expanded}
            handleChange={handleChange}
          />
        ))}
      </List>
    </div>
  );
};

export default Contact;
