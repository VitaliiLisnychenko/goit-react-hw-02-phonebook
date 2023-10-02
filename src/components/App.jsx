import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactLIst';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  onSubmit = data => {
    data.id = nanoid();
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, { ...data }] };
    });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.onSubmit} />
        </Section>
        <Section title="Contacts">
          <ContactList />
        </Section>
      </>
    );
  }
}
