import PropTypes from 'prop-types'
import { nanoid } from "nanoid";

export default function FormSection({ name, type, pattern, title }) {
    return (
        <section key={nanoid()}>
            <label htmlFor={name}>{name}</label>
            <input
                type={type}
                name={name}
                id={name}
                pattern={pattern}
                title={title}
                required
            />
        </section>
    )
}

FormSection.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    pattern: PropTypes.string,
    title: PropTypes.string,
}