import React from 'react';
import './styles.scss';

const input = (props) => {
    return (
        <label className="input-wrap">
            {props.icon && (<i className={`text-primary icon icon-${props.icon}`}/>)}

            <input className="input-style"
                   type={props.type}
                   onChange={props.onChange}
                   value={props.value}
                   placeholder={props.placeholder}
            />

            <div className="input-line"/>
        </label>
    );
};

input.defaultProps = {
  type: 'text'
};

export default input;