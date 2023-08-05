import React from "react";
import PropTypes from 'prop-types'
import { nanoid } from "nanoid";


export class FormSection extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['text']).isRequired,
        pattern: PropTypes.string,
        title: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            type: this.props.type,
            id: this.props.id,
            pattern: this.props.pattern,
            title: this.props.title
        }
    }

    render() {
        const { name, type, pattern, title } = this.state;

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
}