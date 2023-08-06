import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import FormSection from "../FromSection/FormSection";

export default function Form({ addContact }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const { name, number } = event.target;

        setName(name.value)
        setNumber(number.value)
    }

    useEffect(() => {
        if (name.trim() !== '' || number.trim() !== '') addContact(name, number)
    }, [name, number])

    return (
        <form className='form' onSubmit={handleSubmit} >
            <FormSection
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />

            <FormSection
                type="text"
                name="number"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />

            <button type="submit">Add Contact</button>
        </form>
    )
}

Form.propTypes = {
    addContact: PropTypes.func.isRequired
}