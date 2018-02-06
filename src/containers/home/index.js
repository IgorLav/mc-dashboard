import React from 'react';
import Greeting from "../../components/greeting";
import WidgetList from "../../components/widget-list";
import WidgetListHeader from "../../components/widget-list/widget-list-header";
import Pill from "../../components/ui-kit/pill";
import WidgetListItem from "../../components/widget-list/widget-list-item";
import Thumb from "../../components/ui-kit/thumb";
import WidgetTasks from "../../components/widget-tasks";
import WidgetActivity from "../../components/widget-activity";

import data from "./data";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Greeting userName={'Igor'}/>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="widget">
                                Sales
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="widget">
                                Report
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <WidgetTasks tasks={data.tasks}/>
                        </div>

                        <div className="col-lg-4">
                            <WidgetList>
                                <WidgetListHeader title="Messages">
                                    <div className="counters">
                                        <Pill className="pill-primary">10</Pill>
                                    </div>
                                </WidgetListHeader>

                                <WidgetListItem>
                                     <Thumb />
                                    <div>

                                    </div>
                                </WidgetListItem>
                            </WidgetList>
                        </div>

                        <div className="col-lg-4">
                            <WidgetActivity activities={data.activities}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;