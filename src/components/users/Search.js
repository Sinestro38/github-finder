import React, { useState } from 'react';
import PropTypes from 'prop-types'

const Search = ({ clearUsers, showClear, searchUsers, setAlert }) => {
    const [text, setText] = useState('');
    
    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please fill all fields', 'light');
        } else {
            searchUsers(text);
            setText('');
        }
    }
    
    const onChange = e => setText(e.target.value);
    
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange} />
                <input type="submit" value='Submit' className="btn btn-dark btn-block" />
            </form>
            {showClear && (<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>)}
        </div>
    )
}

Search.propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
};


export default Search;
