import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const SearchForm = ({ onSelectName = () => { } }) => {
    const [name, setName] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get("query") ?? "";
    console.log(movieName)


    const onChange = e => {
        const searchName = e.target.value;
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
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Enter name to find the movie"
                    onChange={onChange}
                    required
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;