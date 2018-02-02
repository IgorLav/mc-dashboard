import React from 'react';
import './styles.scss';

const Pill = (props) => (
    <span className={`pill ${props.className}`}>
        {props.children}
    </span>
);

export default Pill;