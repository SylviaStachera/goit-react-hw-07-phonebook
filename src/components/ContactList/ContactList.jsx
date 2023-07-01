import ContactItem from 'components/ContactItem/ContactItem';

import { useSelector } from 'react-redux';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li className={css['list-item']} key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
