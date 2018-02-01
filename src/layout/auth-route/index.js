import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Logo from '../../components/logo/index';
import bg from '../../assets/img/auth-bg.jpg';
import './auth-route.scss';

const authRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={() => (
        <div className="auth-layout" style={{backgroundImage: `url(${bg})`}}>
            <div className="auth-form-wrap">
                <header className="auth-header">
                    <Logo/>
                    <nav className="auth-nav">
                        <NavLink className="auth-nav-link" to='/sign-in'>Sign in</NavLink>
                        <NavLink className="auth-nav-link" to='/sign-up'>Sign up</NavLink>
                    </nav>
                </header>

                <div className="form-body-wrap">
                    <Component/>
                </div>
            </div>
        </div>
    )} exact/>
);

export default authRoute;