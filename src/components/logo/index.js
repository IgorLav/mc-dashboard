import React from 'react';
import Link from 'react-router-dom/es/Link';
import logoImg from '../../assets/img/logo.svg';

const logo = (props) => (
    <Link to="/">
        <img src={logoImg} alt=""/>
    </Link>
);

export default logo;