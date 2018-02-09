import React from 'react';
import Logo from '../../components/logo/index';
import Nav from '../../components/nav/index';
import './styles.scss';
import {connect} from "react-redux";

const Drawer = (props) => (
    <div className={`drawer ${props.isOpen ? 'active' : '' } `}>
        <Logo/>
        <Nav/>
    </div>
);

const mapStateToProps = state =>({
   isOpen: state.drawer.open
});

export default connect(mapStateToProps, null)(Drawer);