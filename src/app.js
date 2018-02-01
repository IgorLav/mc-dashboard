import React from 'react';
import AuthRoute from "./routes/auth-route/index";
import SignIn from "./containers/sign-in";
import SignUp from "./containers/sign-up";


import './assets/styles/main.scss';

const app = (props) => {
    return (
        <div>
            <AuthRoute path='/sign-in' component={SignIn} exact/>
            <AuthRoute path='/sign-up' component={SignUp} exact/>
        </div>
    );
};

export default app;