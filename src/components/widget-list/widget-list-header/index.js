import React from 'react';
import "./styles.scss";

const WidgetListHeader = (props) => (
    <header className={`widget-list-header ${props.className}`}>
        <h4 className="widget-list-title">{props.title}</h4>
        {props.children}
    </header>
);

export default WidgetListHeader;