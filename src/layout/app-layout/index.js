import React from 'react';
import Drawer from '../../components/drawer';
import Header from '../../components/header';
import './styles.scss';

class AppLayout extends React.Component {
    render() {
        return (
            <div className="app-layout">
                <Drawer/>

                <div className="app-page-wrap">
                    <Header/>
                </div>
            </div>
        );
    }
}

export default AppLayout;