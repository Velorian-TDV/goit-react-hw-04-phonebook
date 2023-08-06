import PropTypes from 'prop-types';

export default function Filter({ search }) {
    return (
        <section className="search">
            <label htmlFor='search'>Find contact by name</label>
            <input type="text" id='search' onChange={search} placeholder="Search" />
        </section>
    )
}

Filter.propTypes = {
    search: PropTypes.func,
}