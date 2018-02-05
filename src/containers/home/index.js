import React from 'react';
import Greeting from "../../components/greeting";
import WidgetList from "../../components/widget-list";
import WidgetListHeader from "../../components/widget-list/widget-list-header";
import Pill from "../../components/ui-kit/pill";
import WidgetListItem from "../../components/widget-list/widget-list-item";
import Thumb from "../../components/ui-kit/thumb";

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
                            <WidgetList>
                                <WidgetListHeader title="Tasks">
                                    <div className="counters">
                                        <Pill className="pill-primary">5</Pill>
                                        <Pill className="pill-secondary">2</Pill>
                                    </div>
                                </WidgetListHeader>

                                <WidgetListItem>
                                    sadsda
                                </WidgetListItem>
                            </WidgetList>
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
                                </WidgetListItem>
                            </WidgetList>
                        </div>

                        <div className="col-lg-4">
                            <WidgetList>
                                <WidgetListHeader title="Activity">
                                    <Pill className="pill-primary">13</Pill>
                                </WidgetListHeader>

                                <WidgetListItem>
                                    sadsadasd
                                </WidgetListItem>
                            </WidgetList>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;