import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};
