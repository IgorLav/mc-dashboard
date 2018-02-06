import React from 'react';
import Greeting from "../../components/greeting";
import WidgetTasks from "../../components/widget-tasks";
import WidgetActivity from "../../components/widget-activity";
import WidgetMessages from "../../components/widget-messages";

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
                            <WidgetMessages messages={data.messages}/>
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