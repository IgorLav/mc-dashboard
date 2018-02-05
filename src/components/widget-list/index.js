import React from 'react';
import Pill from "../ui-kit/pill";

const WidgetList = (props) => (
    <div className="widget-list">
        <header className="widget-list-header">
            <h4 className="widget-list-title">{props.title}</h4>
            <div className="counters">
                <Pill className="pill-primary">5</Pill>
                <Pill className="pill-s">5</Pill>
            </div>
        </header>
    </div>
);

export default WidgetList;