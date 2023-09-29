import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form>
          <label>
            <input type="text" name="name" required value={name} />
          </label>
          <label>
            <input type="tel" name="number" required value={number} />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
