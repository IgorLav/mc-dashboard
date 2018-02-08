import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './actions';

class Logout extends React.Component {
    componentDidMount() {
        this.props.onLogout();
    }

    render() {
        return (
            <Redirect to="/sign-in"/>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onLogout: () => dispatch(actions.logout())
});

export default connect(null, mapDispatchToProps)(Logout);