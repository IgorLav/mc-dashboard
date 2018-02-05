import React from 'react';
import './styles.scss';

const ExpandSearch = (props) => (
    <div className={`search ${props.open ? 'open' : ''}`}>
        <input className="search-input" placeholder="Type to search..."/>
        <button className="search-btn" onClick={(e) => props.searchToggle(e)}>
            <i className="icon icon-search"/>
        </button>
    </div>
);

export default ExpandSearch;