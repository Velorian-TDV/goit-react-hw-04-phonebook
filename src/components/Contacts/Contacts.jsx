import React from "react";
import PropTypes from 'prop-types';

export class Contacts extends React.Component {

    static propTypes = {
        getContacts: PropTypes.func.isRequired,
        deleteContact: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.getContacts = this.props.getContacts;
        this.deleteContact = this.props.deleteContact;
    }

    render() {
        return (
            <section className='contacts'>
                {this.getContacts().length === 0 ? <p className="empty">Contact's not found</p> :
                    <ul>
                        {this.getContacts().map(({ id, name, number }) => (
                            <li key={id}>
                                <p>{name}: {number}</p>
                                <button
                                    type='button'
                                    name={id}
                                    onClick={() => this.deleteContact(id)}
                                >Delete</button>
                            </li>
                        ))}
                    </ul>
                }
            </section>
        )
    }
}