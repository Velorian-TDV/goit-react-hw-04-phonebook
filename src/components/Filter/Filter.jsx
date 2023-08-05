import React from "react";
import PropTypes from 'prop-types';

export class Filter extends React.Component {

    static propTypes = {
        search: PropTypes.func,
    }

    constructor(props) {
        super(props);

        this.search = this.props.search;
    }

    render() {
        return (
            <section className="search">
                <label htmlFor='search'>Find contact by name</label>
                <input type="text" id='search' onChange={this.search} placeholder="Search" />
            </section>
        )
    }
}