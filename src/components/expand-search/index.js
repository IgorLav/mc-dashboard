import React from 'react';
import './styles.scss';

const ExpandSearch = (props) => (
    <div className="search open">
        <input className="search-input" placeholder="Type to search..."/>
            <button className="search-btn">
                <i className="icon icon-search"/>
            </button>
    </div>
);

export default ExpandSearch;