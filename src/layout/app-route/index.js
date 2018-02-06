import React from 'react';
import Drawer from '../../components/drawer';
import Header from '../../components/header';
import {Route} from "react-router-dom";
import './styles.scss';

class AppRouteLayout extends React.Component {
    state = {
        searchOpen: false,
        sidebarOpen: true
    };

    searchToggle = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            searchOpen: !prevState.searchOpen
        }));
    };

    sidebarToggle = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            sidebarOpen: !prevState.sidebarOpen
        }));
    };

    render() {
        const Component = this.props.component;

        return (
            <div className="app-layout">
                <Drawer sidebarOpen={this.state.sidebarOpen}/>

                <div className="app-page-wrap">
                    <Header searchToggle={this.searchToggle}
                            searchOpen={this.state.searchOpen}
                            sidebarOpen={this.state.sidebarOpen}
                            sidebarToggle={this.sidebarToggle}
                    />

                    <div className="app-page">
                        <Route path={this.props.path} exact={this.props.exact} render={() => {
                            return <Component />
                        }}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppRouteLayout;