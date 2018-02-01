import React from 'react';
import {Input, Button} from '../../components/ui-kit';

class SignUp extends React.Component {
    render() {
        return (
            <form action="" className="form">
                <h1 className="main-title text-center">Sign <span className="text-primary">up!</span></h1>
                <ul className="controls-list">
                    <li className="controls-list-item">
                        <Input value={''} icon="user" placeholder="Username"/>
                    </li>
                    <li className="controls-list-item">
                        <Input value={''} icon="user" placeholder="First Name"/>
                    </li>
                    <li className="controls-list-item">
                        <Input value={''} icon="user" placeholder="Last Name"/>
                    </li>
                    <li className="controls-list-item">
                        <Input value={''} icon="mail" placeholder="Email"/>
                    </li>
                    <li className="controls-list-item">
                        <Input value={''} icon="user" placeholder="Phone Number"/>
                    </li>
                    <li className="controls-list-item">
                        <Input value={''} icon="lock" placeholder="Password"/>
                    </li>
                    <li className="controls-list-item">
                        <Input value={''} icon="lock" placeholder="Confirm Password"/>
                    </li>
                </ul>

                <footer className="text-center">
                    <Button className='btn-lg btn-submit btn-primary'>
                        Sign Up <i className="icon icon-right"/>
                    </Button>
                </footer>
            </form>
        );
    }
}

export default SignUp;