import React from "react";
import PropTypes from 'prop-types';
import { FormSection } from "../FromSection/FormSection";

export class Form extends React.Component {

    static propTypes = {
        name: PropTypes.string,
        number: PropTypes.string,
        addContact: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.addContact = this.props.addContact;
    }

    state = {
        name: '',
        number: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, number } = event.target;

        this.setState(
            { name: name.value, number: number.value },
            () => { this.addContact(this.state) }
        );
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit} >
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
}