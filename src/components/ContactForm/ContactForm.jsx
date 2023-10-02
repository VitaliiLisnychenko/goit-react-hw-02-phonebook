import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { onSubmit, nameAlreadyIs, numberAlreadyIs } = this.props;

    if (nameAlreadyIs(this.state.name)) {
      alert(`${this.state.nsme} is already in contacts.`);
      return;
    }

    if (numberAlreadyIs(this.state.number)) {
      alert(`${this.state.number} is already in contacts.`);
      return;
    }

    onSubmit(this.state);
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              required
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
