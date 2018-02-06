import React from 'react';
import {Link} from 'react-router-dom';
import WidgetList from "../widget-list";
import WidgetListHeader from "../widget-list/widget-list-header";
import Pill from "../ui-kit/pill";
import WidgetListItem from "../widget-list/widget-list-item";
import Thumb from "../ui-kit/thumb";

const renderItems = (activities) => (
    activities.map(activity => (
        <WidgetListItem borderBottom key={activity.id}>
            <Thumb />
            <div>
                <h5 className="">
                    <Link to="/">{activity.user}</Link>
                    <span> {activity.activity} </span>
                    <Link to="/">{activity.subject}</Link>
                </h5>
                <p className="time">{activity.time}</p>
            </div>
        </WidgetListItem>
    ))
);

const WidgetActivity = (props) => (
    <WidgetList>
        <WidgetListHeader title="Activities">
            <Pill className="pill-primary">13</Pill>
        </WidgetListHeader>

        {renderItems(props.activities)}
    </WidgetList>
);

WidgetActivity.defaultProps = {
  activities: []
};

export default WidgetActivity;