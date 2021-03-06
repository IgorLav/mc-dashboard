import React from 'react';
import WidgetList from "../widget-list";
import WidgetListHeader from "../widget-list/widget-list-header";
import WidgetListItem from "../widget-list/widget-list-item";
import Thumb from "../ui-kit/thumb";
import Pill from "../ui-kit/pill";
import OptionsMenu from "../ui-kit/options-menu";
import './styles.scss';

const renderItems = (tasks) => (
    tasks.map(task => (
        <WidgetListItem className="widget-tasks" borderBottom key={task.id}>
            <Thumb />

            <div>
                <h5 className="">{task.title}</h5>
                <p>{task.status}</p>
            </div>

            <OptionsMenu>

            </OptionsMenu>
        </WidgetListItem>
    ))
);

const WidgetTasks = (props) => (
    <WidgetList>
        <WidgetListHeader title="Tasks">
            <div className="counters">
                <Pill className="pill-primary">5</Pill>
                <Pill className="pill-secondary">2</Pill>
            </div>
        </WidgetListHeader>
        {renderItems(props.tasks)}
    </WidgetList>
);

WidgetTasks.defaultProps = {
    tasks: []
};

export default WidgetTasks;