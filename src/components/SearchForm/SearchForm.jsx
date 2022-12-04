import React, { useState } from 'react';
import PropTypes from "prop-types";
import { useSearchParams } from 'react-router-dom';

import css from './SearchForm.module.css';


const SearchForm = ({ onSelectName = () => { } }) => {
    const [name, setName] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get("query") ?? "";
    console.log(movieName)


    const onChange = e => {
        const searchName = e.target.value.trim();
        setName(searchName);
    };

    const onSubmit = e => {
        e.preventDefault();
        onSelectName(name);
        setSearchParams({ query: name });

        reset();
    };

    const reset = () => {
        setName('');
    };

    return (
        <div className={css.formSection}>
            <form onSubmit={onSubmit}>
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Enter name to find the movie"
                    onChange={onChange}
                    required
                />
                <button className={css.button} type="submit">Search</button>
            </form>
        </div>
    )
}

SearchForm.propTypes = {
    onSelectName: PropTypes.func.isRequired
}

export default SearchForm;