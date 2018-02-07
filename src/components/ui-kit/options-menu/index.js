import React from 'react';
import './styles.scss';

const OptionsMenu = (props) => (
    <div className={`options-menu ${props.className ? props.className : ''}`}>
        <button className="options-btn">
            <span className="dot"/>
        </button>

        <ul className="options-menu-list">
            <li className="option-menu-item">sdsd</li>
            {props.children}
        </ul>
    </div>
);

export default OptionsMenu;