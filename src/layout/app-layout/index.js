import React from 'react';
import Drawer from '../../components/drawer';
import Header from '../../components/header';
import './styles.scss';
import Home from "../../containers/home";

class AppLayout extends React.Component {
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
                        <Home/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppLayout;