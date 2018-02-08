import React from 'react';
import {Input, Button} from '../../components/ui-kit';
import validate from "../../utils/validate";
import firebase from "../../firebase-module";
import {withRouter} from "react-router-dom";

class SignIn extends React.Component {
    state = {
        controls: {
            email: {
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            password: {
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    };

    inputHandler = (e, id) => {
        const updateFormInfo = {
            ...this.state.controls
        };

        const value = e.target.value;

        updateFormInfo[id] = {
            ...updateFormInfo[id],
            value: value,
            valid: validate(value, updateFormInfo[id].validation),
            touched: true
        };

        let formIsValid = true;

        for (let control in updateFormInfo) {
            if (updateFormInfo[control].validation) {
                formIsValid = updateFormInfo[control].valid && formIsValid
            }
        }

        this.setState({
            controls: updateFormInfo,
            formIsValid
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const state = this.state;

    };

    render() {
        const controls = this.state.controls;
        return (
            <form onSubmit={e => this.onSubmit(e)} className="form">
                <h1 className="main-title text-center">Welcome <span className="text-primary">back!</span></h1>

                <ul className="controls-list">
                    <li className="controls-list-item">
                        <Input value={controls.email.value}
                               icon="user"
                               onChange={(e) => this.inputHandler(e, 'email')}
                               placeholder="Email"
                        />
                    </li>
                    <li className="controls-list-item">
                        <Input value={controls.password.value}
                               icon="lock"
                               onChange={(e) => this.inputHandler(e, 'password')}
                               placeholder="Password"
                        />
                    </li>
                </ul>

                <footer className="text-center">
                    <Button className="btn-lg btn-submit btn-primary" disabled={!this.state.formIsValid}>
                        Sign In <i className="icon icon-right"/>
                    </Button>
                </footer>
            </form>
        );
    }
}

export default withRouter(SignIn);