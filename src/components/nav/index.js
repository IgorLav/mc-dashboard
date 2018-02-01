import React from 'react';
import {NavLink} from 'react-router-dom';
import navScheme from './nav';
import './styles.scss';

const renderItems = navScheme.nav.map(item => (
    <NavLink to={item.path} className="main-nav-link" key={item.name}>
        <i className={`icon icon-${item.icon}`}/>
        {item.name}
    </NavLink>
));

const Nav = (props) => (
    <nav className="main-nav">
        {renderItems}
    </nav>
);

export default Nav;
