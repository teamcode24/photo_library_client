import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserSelector, UserDispatch } from '../../../services/store/User/UserMapping'
import DefaultComponent from '../../Extend/Default/DefaultComponent'
import './Login.css'

class Login extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            text: {
                remember: 'Remember',
                forgot: 'Forgot your password?',
                submit: 'Login',
                signup_ask: 'Don\'t have an account?',
                signup_text: 'Join',
                messageSuccess: 'Login successful',
                messageError: 'Invalid email or password',
                messageRequired: 'Please enter all required field',
            },
        }
    }

    componentDidMount() {
        this.setState(this.props.user)
    }

    onSubmitClick = e => {
        var data = {
            email: this.state.email,
            password: this.state.password,
        }
        if (data.email.length !== 0) {
            this.props.remember(data)
        }
        if (data.email.length === 0 || data.password.length === 0) {
        } else {
            this.props.autoCancelRequest(this.props.login(data))
                .then(res => {
                    console.log("login success:", res)
                    this.props.redirect("/account", "", {
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
        <div className="login-panel">
            <div className="login-input">
                <div className="login-email">
                    <div>Email</div>
                    <input type="email"
                        value={this.state.email} onChange={this.props.setInputState(this, "email")}
                    ></input>
                </div>
                <div className="login-password">
                    <div>
                        <div>Password</div>
                        <Link to="/forgot_password">{this.state.text.forgot}</Link>
                    </div>
                    <input type="password"
                        value={this.state.password} onChange={this.props.setInputState(this, "password")}
                    ></input>
                </div>
                <div className="login-submit">
                    <input type="button" defaultValue={this.state.text.submit} onClick={this.onSubmitClick}></input>
                </div>
                <div className="login-redirect">
                    <div>{this.state.text.signup_ask}</div>
                    <Link to="/join">{this.state.text.signup_text}</Link>
                </div>
            </div>
        </div>
    )
}

export default connect(UserSelector, UserDispatch)(DefaultComponent(Login))
