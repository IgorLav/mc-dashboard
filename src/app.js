import React from 'react';
import AuthRoute from "./layout/auth-route/index";
import SignIn from "./containers/sign-in";
import SignUp from "./containers/sign-up";
import AppRouteLayout from "./layout/app-route";

import './assets/font-icons/css/fontello.css';
import './assets/scss/main.scss';
import Home from "./containers/home";

const app = (props) => {
    return (
        <div>
            <AuthRoute path='/sign-in' component={SignIn} exact/>
            <AuthRoute path='/sign-up' component={SignUp} exact/>
            <AppRouteLayout path='/app/home' component={Home} exact/>
            <AppRouteLayout path='/app/workflow' component={Home} exact/>
            <AppRouteLayout path='/app/statistic' component={Home} exact/>
            <AppRouteLayout path='/app/calendar' component={Home} exact/>
            <AppRouteLayout path='/app/users' component={Home} exact/>
            <AppRouteLayout path='/app/settings' component={Home} exact/>
        </div>
    );
};

export default app;