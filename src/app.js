import React from 'react';
import AuthRoute from "./layout/auth-route/index";
import SignIn from "./containers/sign-in";
import SignUp from "./containers/sign-up";

import './assets/font-icons/css/fontello.css';
import './assets/scss/main.scss';

const app = (props) => {
    return (
        <div>
            <AuthRoute path='/sign-in' component={SignIn} exact/>
            <AuthRoute path='/sign-up' component={SignUp} exact/>
        </div>
    );
};

export default app;