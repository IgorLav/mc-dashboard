import React from 'react';
import Drawer from '../../components/drawer';
import Header from '../../components/header';

class AppLayout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Drawer/>
            </div>
        );
    }
}

export default AppLayout;