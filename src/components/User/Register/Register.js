import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserSelector, UserDispatch } from '../../../services/store/User/UserMapping'
import DefaultComponent from '../../Extend/Default/DefaultComponent'

class Register extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            text: {
                forgot: 'Forgot your password?',
                submit: 'Join',
                back: 'Login',
                messageError: 'Something went wrong, please try again',
                messageRequired: 'Please enter all required field',
                messageSuccess: 'Your account has been successfully registed',
            },
        }
    }

    onSubmitClick = e => {
        var data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }
        if (data.username.length === 0 || data.email.length === 0 || data.password.length === 0) {
        } else {
            this.props.autoCancelRequest(this.props.createUser(data))
                .then(res => {
                    this.props.redirect("/login", "", {
                        type: "success",
                        message: this.state.text.messageSuccess,
                    })
                })
                .catch(err => {
                    if (err.reason === 'unmounted') {
                        console.log("Component has unmounted")
                    } else {
                    }
                })
        }
    }

    render = () => (
        <div className="register-panel">
            <div className="register-logo">
                <div className="register-login">
                    <div>Already have an account?</div>
                    <Link to="/login">
                        <input type="button" defaultValue={this.state.text.back}></input>
                    </Link>
                </div>
            </div>
            <div className="register-input">
                <div className="register-name">
                    <div className="register-first-name">
                        <div>First name</div>
                        <input type="text"
                            value={this.state.firstName} onChange={this.props.setInputState(this, "firstName")}
                        ></input>
                    </div>
                    <div className="register-last-name">
                        <div>Last name</div>
                        <input type="text"
                            value={this.state.lastName} onChange={this.props.setInputState(this, "lastName")}
                        ></input>
                    </div>
                </div>
                <div className="register-email">
                    <div>Email address</div>
                    <input type="email"
                        value={this.state.email} onChange={this.props.setInputState(this, "email")}
                    ></input>
                </div>
                <div className="register-username">
                    <div>Username</div>
                    <div>(only letters, numbers, and underscores)</div>
                    <input type="text"
                        value={this.state.username} onChange={this.props.setInputState(this, "username")}
                    ></input>
                </div>
                <div className="register-password">
                    <div>Password (min. 6 char)</div>
                    <input type="password"
                        value={this.state.password} onChange={this.props.setInputState(this, "password")}
                    ></input>
                </div>
                <div className="register-submit">
                    <input type="button" defaultValue={this.state.text.submit} onClick={this.onSubmitClick}></input>
                </div>
                <div className="register-terms">
                    <div>By joining, you agree to the Terms and Privacy Policy</div>
                </div>
            </div>
        </div>
    )
}

export default connect(UserSelector, UserDispatch)(DefaultComponent(Register))
