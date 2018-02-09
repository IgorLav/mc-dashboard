import React from 'react';
import {Link} from 'react-router-dom';
import {Pill} from '../../components/ui-kit';
import './styles.scss';
import userImg from '../../assets/img/user-thumb/user.jpg';
import ExpandSearch from "../expand-search";
import {connect} from "react-redux";
import * as actions from '../../containers/drawer/actions';

const Header = (props) => {
    const {isDrawerOpen, openDrawer, closeDrawer} = props;

    return (
        <header className="header">
            <div className="header-bar left-bar">
                <button className={`burger-btn ${isDrawerOpen ? 'active' : ''}`}
                        onClick={()=> isDrawerOpen ?  closeDrawer() : openDrawer()}
                >
                    <i className="icon icon-menu"/>
                </button>

                <ExpandSearch searchToggle={props.searchToggle} open={props.searchOpen}/>
            </div>

            <div className="header-bar right-bar">
                <Link className="btn btn-primary btn-sm" to="/app/new-project">Add project</Link>

                <button className="msg-btn">
                    <i className="icon icon-mail-alt"/>
                </button>

                <button className="notification-btn">
                    <i className="icon icon-bell">
                        <Pill className="pill-primary">3</Pill>
                    </i>
                </button>

                <div className="user-menu">
                    <button className="user-menu-btn">
                        <div className="user-thumb">
                            <img src={userImg} alt=""/>
                        </div>

                        <span className="caret"/>
                    </button>
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = state => ({
    isDrawerOpen: state.drawer.open
});

const mapDispatchToProps = dispatch => ({
    openDrawer: () => dispatch(actions.openDrawer()),
    closeDrawer: () => dispatch(actions.closeDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);