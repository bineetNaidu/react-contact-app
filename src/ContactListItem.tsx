import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import AccordionActions from '@material-ui/core/AccordionActions';
import Button from '@material-ui/core/Button';
interface Props {
  expanded: boolean | string;
  handleChange: (
    panel: string
  ) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
  id: string;
  image_url?: string | null;
  ph_number: number | string;
  username: string;
  isFavourite: boolean;
  createdAt: Date;
}

const ContactListItem: React.FC<Props> = ({
  expanded,
  handleChange,
  id,
  isFavourite,
  ph_number,
  username,
  image_url,
}) => {
  return (
    <Accordion key={id} expanded={expanded === id} onChange={handleChange(id)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Avatar
          alt={username}
          src={image_url === null ? '/static/images/avatar/1.jpg' : image_url}
        />
        <Typography className={'contact__secondaryHeading'}>
          {username}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="contact__details">
        <div className="contact__metaData">
          <Typography variant="button" display="block" gutterBottom>
            Phone number
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            {ph_number}
          </Typography>
        </div>
        <div className="contact__metaData contact__metaData--center">
          <Typography variant="button" display="block" gutterBottom>
            Username
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            {username}
          </Typography>
        </div>
        <div className="contact__metaData">
          <Typography variant="button" display="block" gutterBottom>
            Favourite?
          </Typography>
          <Typography variant="overline" display="block" gutterBottom>
            {isFavourite ? 'Yes' : 'No'}
          </Typography>
        </div>
      </AccordionDetails>
      <Divider />
      <AccordionActions>
        <Button size="small" color="secondary">
          Delete
        </Button>
        <Button disabled size="small" color="primary">
          Edit
        </Button>
      </AccordionActions>
    </Accordion>
  );
};

export default ContactListItem;
