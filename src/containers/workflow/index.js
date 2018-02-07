import React from 'react';
import WidgetList from "../../components/widget-list";
import data from "./data";
import WidgetListItem from "../../components/widget-list/widget-list-item";
import Thumb from "../../components/ui-kit/thumb";
import {Link} from "react-router-dom";
import OptionsMenu from "../../components/ui-kit/options-menu";

class Workflow extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-4">
                        <h2>To do <span className="text-plain">(6)</span></h2>
                        <WidgetList>
                            <WidgetListItem borderBottom key={1}>
                                <Thumb />
                                <div>
                                    <h5 className="">
                                        <Link to="/">New website for JCD.pl</Link>
                                    </h5>
                                    <p className="time"><i className="icon icon-clock"/> 5 days left</p>
                                </div>
                                <OptionsMenu>
                                </OptionsMenu>
                            </WidgetListItem>
                        </WidgetList>
                    </div>

                    <div className="col-lg-4">
                        <h2>In Progress <span className="text-plain">(3)</span></h2>
                        <WidgetList>
                            <WidgetListItem borderBottom key={1}>
                                <Thumb />
                                <div>
                                    <h5 className="">
                                        <Link to="/">New website for JCD.pl</Link>
                                    </h5>
                                    <p className="time"><i className="icon icon-clock"/> 5 days left</p>
                                </div>
                                <OptionsMenu>
                                </OptionsMenu>
                            </WidgetListItem>
                        </WidgetList>
                    </div>

                    <div className="col-lg-4">
                        <h2>Completed <span className="text-plain">(4)</span></h2>
                        <WidgetList>
                            <WidgetListItem borderBottom key={1}>
                                <Thumb />
                                <div>
                                    <h5 className="">
                                        <Link to="/">New website for JCD.pl</Link>
                                    </h5>
                                    <p className="time"><i className="icon icon-clock"/> 5 days left</p>
                                </div>
                                <OptionsMenu>
                                </OptionsMenu>
                            </WidgetListItem>
                        </WidgetList>
                    </div>
                </div>
            </div>
        );
    }
}

export default Workflow;