import React from 'react';
import './styles.scss';

const Greeting = (props) => {
    return props.userName ? (
        <div className="greeting">
            <h2 className="greeting-text">Hello, {props.userName}!</h2>
        </div>
    ) : null;
};

export default Greeting;