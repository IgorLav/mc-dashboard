import React from 'react';
import {Input, Button} from '../../components/ui-kit';

class SignIn extends React.Component {
    render() {
        return (
            <form action="" className="form">
                <h1 className="main-title text-center">Welcome <span className="text-primary">back!</span></h1>

                <ul className="controls-list">
                    <li className="controls-list-item">
                        <Input value={''} icon="user" placeholder="Username"/>
                    </li>
                    <li className="controls-list-item">
                        <Input value={''} icon="lock" placeholder="Password"/>
                    </li>
                </ul>

                <footer className="text-center">
                    <Button className="btn-lg btn-submit btn-primary">
                        Sign In <i className="icon icon-right"/>
                    </Button>
                </footer>
            </form>
        );
    }
}

export default SignIn;