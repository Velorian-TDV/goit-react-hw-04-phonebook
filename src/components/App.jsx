import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Wrapper } from './App.styled';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export default function App() {

    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        if (localStorage.getItem('contacts') !== null) {
            setContacts(JSON.parse(localStorage.getItem("contacts")));
        }
    }, [])

    useEffect(() => {
        if (contacts.length !== 0) {
            localStorage.setItem('contacts', JSON.stringify(contacts))            
        }

        if (contacts.length === 0) {
            localStorage.removeItem('contacts')
        }
    }, [contacts])

    const addContact = (name, number) => {
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

            setContacts([...contacts, newContact])
        }
    };

    const searchContact = (event) => {
        const { target } = event;
        setFilter(target.value.toLowerCase())
    };

    const deleteContact = (id) => {
        const updatedContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(updatedContacts);
    };

    const getAllContacts = () => {
        const filteredContacts = contacts.filter(item => item.name.toLowerCase().includes(filter));
        const displayContacts = filter === undefined ? contacts : filteredContacts;

        return displayContacts
    }

    return (
        <Wrapper>
            <h2>Phonebook</h2>
            <Form addContact={addContact} />

            <h2>Contacts</h2>
            <Filter search={searchContact} />
            <Contacts
                getContacts={getAllContacts}
                deleteContact={deleteContact}
            />
        </Wrapper>
    );
}