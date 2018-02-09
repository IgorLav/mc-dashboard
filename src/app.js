import React from 'react';
import AuthRoute from "./layout/auth-route/index";
import SignIn from "./containers/sign-in";
import SignUp from "./containers/sign-up";
import AppRouteLayout from "./layout/app-route";
import Home from "./containers/home";
import Workflow from "./containers/workflow";
import Statistic from "./containers/statistic";
import Calendar from "./containers/calendar";
import Users from "./containers/users";
import Settings from "./containers/settings";
import Logout from "./containers/settings";

import './assets/font-icons/css/fontello.css';
import './assets/scss/main.scss';
import CreateProject from "./components/create-project";


const app = (props) => {
    return (
        <div>
            <AuthRoute path='/logout' component={Logout} exact/>
            <AuthRoute path='/sign-in' component={SignIn} exact/>
            <AuthRoute path='/sign-up' component={SignUp} exact/>
            <AppRouteLayout path='/app/home' component={Home} exact/>
            <AppRouteLayout path='/app/workflow' component={Workflow} exact/>
            <AppRouteLayout path='/app/statistic' component={Statistic} exact/>
            <AppRouteLayout path='/app/calendar' component={Calendar} exact/>
            <AppRouteLayout path='/app/users/:page?' component={Users} exact/>
            <AppRouteLayout path='/app/settings' component={Settings} exact/>
            <AppRouteLayout path='/app/new-project' component={CreateProject} exact/>
        </div>
    );
};

export default app;