import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import css from '../components/App.module.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <>
      <div className={css.container}>
        <h2 className={css.title}>Phonebook</h2>
        <ContactForm />

        <h2 className={css.title}>Contacts:</h2>
        {contacts.length > 0 ? <Filter /> : null}
        {contacts.length === 0 ? (
          <h2 className={css.title}>You have no contacts yet</h2>
        ) : (
          <ContactList />
        )}
      </div>
    </>
  );
};
