import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactLIst';
import { Filter } from './FilterContacts/FilterContacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onSubmit = data => {
    data.id = nanoid();
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, { ...data }] };
    });
  };

  nameAlreadyIs = contact => {
    return this.state.contacts.some(({ name }) => name === contact);
  };

  numberAlreadyIs = contact => {
    return this.state.contacts.some(({ number }) => number === contact);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().match(this.state.filter.toLowerCase()) ||
        contact.number.match(this.state.filter)
    );
  };

  onDelete = id => {
    const data = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: [...data] });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            onSubmit={this.onSubmit}
            nameAlreadyIs={this.nameAlreadyIs}
            numberAlreadyIs={this.numberAlreadyIs}
          />
        </Section>
        <Section title="Contacts">
          {this.state.contacts.length !== 0 && (
            <Filter filter={this.state.filter} onChange={this.handleChange} />
          )}
          <ContactList
            contacts={this.filterContacts()}
            onDelete={this.onDelete}
          />
        </Section>
      </>
    );
  }
}
