import { MetaContact } from './MetaContacts';

export type Contact = {
  id: string;
  image_url: string;
  email: string;
  ph_number: number;
  username: string;
  createAt: Date;
  contact?: MetaContact;
};
