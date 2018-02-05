import React from 'react';
import Drawer from '../../components/drawer';
import Header from '../../components/header';
import './styles.scss';

class AppLayout extends React.Component {
    state = {
        searchOpen: false,
    };

    searchToggle = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            searchOpen: !prevState.searchOpen
        }));
    };

    render() {
        return (
            <div className="app-layout">
                <Drawer/>

                <div className="app-page-wrap">
                    <Header searchToggle={this.searchToggle} searchOpen={this.state.searchOpen}/>
                </div>
            </div>
        );
    }
}

export default AppLayout;