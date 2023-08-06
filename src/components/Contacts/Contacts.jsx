import PropTypes from 'prop-types';

export default function Contacts({ getContacts, deleteContact }) {
    return (
        <section className='contacts'>
            {getContacts().length === 0 ? <p className="empty">Contact's not found</p> :
                <ul>
                    {getContacts().map(({ id, name, number }) => (
                        <li key={id}>
                            <p>{name}: {number}</p>
                            <button
                                type='button'
                                name={id}
                                onClick={() => deleteContact(id)}
                            >Delete</button>
                        </li>
                    ))}
                </ul>
            }
        </section>
    )
}

Contacts.propTypes = {
    getContacts: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired
}