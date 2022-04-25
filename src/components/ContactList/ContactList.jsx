import { ContactCard, Contact, Button } from './ContactList.Styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactCard>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id}>
          {name}: {number}
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Contact>
      ))}
    </ContactCard>
  );
};
