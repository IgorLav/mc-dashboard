import React from 'react';
import './btn.scss';

const btn = (props) => (
    <button
        className={`btn`}
        disabled={props.disabled}
        onClick={props.clicked}
    >
        {props.children}
    </button>
);

export default btn;