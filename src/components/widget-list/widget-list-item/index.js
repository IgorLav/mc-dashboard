import React from 'react';
import './styles.scss';

const WidgetListItem = (props) => {
    return (
        <div className={`widget-list-item ${props.borderBottom ? 'border-bottom' : ''} ${props.className}`}>
            {props.children}
        </div>
    );
};

export default WidgetListItem;