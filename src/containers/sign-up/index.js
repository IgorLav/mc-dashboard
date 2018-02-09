import React from 'react';
import {Input, Button} from '../../components/ui-kit';
import validate from "../../utils/validate";
import {connect} from "react-redux";
import * as actions from './actions';
import withRouter from "react-router-dom/es/withRouter";

class SignUp extends React.Component {
    state = {
        controls: {
            firstName: {
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            lastName: {
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            phone: {
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
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

    displaySubmitBtn = () => {
        if (this.props.loading) {
            return <Button className="btn-lg btn-submit btn-primary" disabled> Submitting... </Button>
        }
        return (
            <Button className="btn-lg btn-submit btn-primary" disabled={!this.state.formIsValid}>
                Sign In <i className="icon icon-right"/>
            </Button>
        );
    };

    onSubmit = (e) => {
        e.preventDefault();

        const state = this.state;

        if (state.formIsValid) {
            this.props.onSignUp({
                    firstName: state.controls.firstName.value,
                    lastName: state.controls.lastName.value,
                    email: state.controls.email.value,
                    phone: state.controls.phone.value,
                    password: state.controls.password.value,
                },
                this.props.history
            );
        }
    };

    render() {
        const controls = this.state.controls;

        return (
            <form action="" className="form" onSubmit={(e) => this.onSubmit(e)}>
                <h1 className="main-title text-center">Sign <span className="text-primary">up!</span></h1>
                <ul className="controls-list">
                    <li className="controls-list-item">
                        <Input value={controls.firstName.value}
                               icon="user"
                               onChange={(e) => this.inputHandler(e, 'firstName')}
                               placeholder="First Name"
                        />
                    </li>
                    <li className="controls-list-item">
                        <Input value={controls.lastName.value}
                               icon="user"
                               onChange={(e) => this.inputHandler(e, 'lastName')}
                               placeholder="Last Name"
                        />
                    </li>
                    <li className="controls-list-item">
                        <Input value={controls.email.value}
                               icon="mail"
                               onChange={(e) => this.inputHandler(e, 'email')}
                               placeholder="Email"
                        />
                    </li>
                    <li className="controls-list-item">
                        <Input value={controls.phone.value}
                               icon="user"
                               onChange={(e) => this.inputHandler(e, 'phone')}
                               placeholder="Phone Number"
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
                    {this.displaySubmitBtn()}
                </footer>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    error: state.signUp.error,
    loading: state.signUp.loading,
});

const mapDispatchToProps = dispatch => ({
    onSignUp: (userData, history) => dispatch(actions.signUp(userData, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));