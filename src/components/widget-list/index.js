import React from 'react';
import './styles.scss';

const WidgetList = (props) => (
    <div className={`widget-list ${props.className}`}>
        {props.children}
    </div>
);

export default WidgetList;