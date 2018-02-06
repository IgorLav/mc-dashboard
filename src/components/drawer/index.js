import React from 'react';
import Logo from '../logo';
import Nav from '../nav';
import './styles.scss';

const Drawer = (props) => (
    <div className={`drawer ${props.sidebarOpen ? 'active' : '' } `}>
        <Logo/>
        <Nav/>
    </div>
);

export default Drawer;