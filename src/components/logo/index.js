import React from 'react';
import Link from 'react-router-dom/es/Link';
import logoImg from '../../assets/img/logo.svg';
import './styles.scss';

const Logo = (props) => (
    <Link to="/" className="logo">
        <img src={logoImg} alt=""/>
    </Link>
);

export default Logo;