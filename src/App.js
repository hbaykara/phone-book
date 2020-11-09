import logo from "./logo.svg";
import "./App.css";

import Contacts from "./Components/Contacts";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.addContact = this.addContact.bind(this);
  }

  state = {
    contacts: [
      {
        name: "Ahmet",
        phone: "121313154",
      },
      {
        name: "Behçet",
        phone: "146543315",
      },
    ],
  };

  addContact(contact) {
    const { contacts } = this.state;
    contacts.push(contact);

    this.setState({
      contacts
    })
  }

  render() {
    return (
      <div className="App">
        <Contacts addContact={this.addContact} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
