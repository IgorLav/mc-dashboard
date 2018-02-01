import React from 'react';
import {Link} from 'react-router-dom';
import './btn.scss';

const btnLink = (props) => (
    <Link className={`btn ${props.className}`}
          to={props.path}
          onClick={props.clicked}
    >
        {props.children}
    </Link>
);

export default btnLink;