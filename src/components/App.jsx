import React from 'react';
import { nanoid } from "nanoid";
import { Wrapper } from './App.styled';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

class App extends React.Component {

    state = {
        contacts: [
            // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: this.props.filter,
    };

    componentDidMount() {
        const contactsFromStorage = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contactsFromStorage);

        if (parsedContacts) {
            this.setState({ contacts: parsedContacts });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { contacts } = this.state;
        const prevContacts = prevState.contacts;

        if (contacts !== prevContacts) {
            localStorage.setItem('contacts', JSON.stringify(contacts))
        }
    }

    addContact = (contactData) => {
        const { name, number } = contactData;
        const { contacts } = this.state;

        const exist = contacts.find(
            (contact) => contact.name === name
        );

        if (exist) {
            return alert(`${name} is already in contacts.`);
        } else {
            const newContact = {
                id: nanoid(),
                name: name,
                number: number,
            };

            this.setState((prevState) => ({
                contacts: [...prevState.contacts, newContact],
            }))
        }
    };

    deleteContact = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter(
                (contact) => contact.id !== id
            ),
        }));
    };

    searchContact = (event) => {
        const { target } = event;
        this.setState({ filter: target.value.toLowerCase() });
    };

    getAllContacts = () => {
        const { contacts, filter } = this.state;

        const filteredContacts = contacts.filter(item => item.name.toLowerCase().includes(filter));
        const displayContacts = filter === undefined ? contacts : filteredContacts;

        return displayContacts
    }

    render() {
        return (
            <Wrapper>
                <h2>Phonebook</h2>
                <Form addContact={this.addContact} />

                <h2>Contacts</h2>
                <Filter search={this.searchContact} />
                <Contacts
                    getContacts={this.getAllContacts}
                    deleteContact={this.deleteContact}
                />
            </Wrapper>
        );
    }
}

export default App;