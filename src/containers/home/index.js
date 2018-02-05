import React from 'react';
import Greeting from "../../components/greeting";
import WidgetList from "../../components/widget-list";
import WidgetListHeader from "../../components/widget-list/widget-list-header";
import Pill from "../../components/ui-kit/pill";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Greeting userName={'Igor'}/>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5">
                            Sales
                        </div>

                        <div className="col-lg-7">
                            Report
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
                                <div className="widget-list-item">
                                    sadsadasd
                                </div>
                            </WidgetList>
                        </div>

                        <div className="col-lg-4">
                            <WidgetList>
                                <WidgetListHeader title="Messages">
                                    <div className="counters">
                                        <Pill className="pill-primary">10</Pill>
                                    </div>
                                </WidgetListHeader>

                                <div className="widget-list-item">
                                    sadsadasd
                                </div>
                            </WidgetList>
                        </div>

                        <div className="col-lg-4">
                            <WidgetList>
                                <WidgetListHeader title="Activity">
                                    <Pill className="pill-primary">13</Pill>
                                </WidgetListHeader>

                                <div className="widget-list-item">
                                    sadsadasd
                                </div>
                            </WidgetList>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;