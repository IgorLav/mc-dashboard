import React from 'react';
import Drawer from '../../containers/drawer';
import Header from '../../components/header';
import {Route, withRouter} from "react-router-dom";
import './styles.scss';
import firebase from '../../firebase-module';

class AppRouteLayout extends React.Component {
    state = {
        searchOpen: false,
    };

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user)
                console.log(2222);
            }
            else {
                return this.props.history.push('/sign-in')
            }
        });
    }

    searchToggle = (e) => {
        e.preventDefault();
        this.setState((prevState) => ({
            searchOpen: !prevState.searchOpen
        }));
    };

    drawerToggle = () => {
        const { isDrawerOpen,closeDrawer,openDrawer } = this.props;
        return isDrawerOpen ?  closeDrawer()  : openDrawer();
    };

    render() {
        const Component = this.props.component;
console.log(this.props);
        return (
            <Route path={this.props.path} exact={this.props.exact} render={() => (
                <div className="app-layout">
                    <Drawer isOpen={this.props.isDrawerOpen}/>

                    <div className="app-page-wrap">
                        <Header searchToggle={this.searchToggle}
                                searchOpen={this.state.searchOpen}
                                isDrawerOpen={this.props.isDrawerOpen}
                                drawerToggle={this.drawerToggle}
                        />

                        <div className="app-page">
                            <Component/>
                        </div>
                    </div>
                </div>
            )}/>
        );
    }
}

export default  withRouter(AppRouteLayout);