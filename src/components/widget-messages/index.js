import React from 'react';
import {Link} from 'react-router-dom';
import WidgetList from "../widget-list";
import WidgetListHeader from "../widget-list/widget-list-header";
import Pill from "../ui-kit/pill";
import WidgetListItem from "../widget-list/widget-list-item";
import Thumb from "../ui-kit/thumb";

const renderItems = (messages) => (
    messages.map(item => (
        <WidgetListItem borderBottom key={item.id}>
            <Thumb />
            <div>
                <h5 className="">
                    <Link to="/">{item.user}</Link> <span className="time">{item.time}</span>
                </h5>
                <p>{item.message}</p>
            </div>
        </WidgetListItem>
    ))
);

const WidgetMessages = (props) => (
    <WidgetList>
        <WidgetListHeader title="Messages">
            <Pill className="pill-primary">4</Pill>
        </WidgetListHeader>

        {renderItems(props.messages)}
    </WidgetList>
);

WidgetMessages.defaultProps = {
    activities: []
};

export default WidgetMessages;