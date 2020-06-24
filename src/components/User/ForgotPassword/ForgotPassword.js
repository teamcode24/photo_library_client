import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { UserSelector, UserDispatch } from '../../../services/store/User/UserMapping'
import DefaultComponent from '../../Extend/Default/DefaultComponent'

class ForgotPassword extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            text: {
                header: 'Reset Password',
                subHeader: 'To reset password, please provide your email',
                submit: 'Send Reset Instructions',
                back: 'Back',
                messageSuccess: 'Your password has been reset successfully!',
                messageError: 'Something went wrong, please try again',
                messageRequired: 'Please enter all required field',
            },
        }
    }

    onSubmitClick = e => {
        this.props.turnOnLoading()
        var data = {
            email: this.state.email,
        }
        if (data.email.length === 0) {
            this.props.turnOffLoading()
        } else {
            this.props.autoCancelRequest(this.props.resetPassword(data))
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
                        this.props.turnOffLoading()
                    }
                })
            }
    }

    render = () => (
        <div className={"forgot-password-panel" + this.props.getLoadingClass()}>
            <div className="forgot-password-input">
                <h2>{this.state.text.header}</h2>
                <div>{this.state.text.subHeader}</div>
                <div className="forgot-password-email">
                    <input type="email" className="w100" placeholder="Email"
                        value={this.state.email} onChange={this.props.setInputState(this, "email")}
                    ></input>
                </div>
                <div className="forgot-password-submit">
                    <input type="button" defaultValue={this.state.text.submit} onClick={this.onSubmitClick}></input>
                </div>
                <div className="login-redirect">
                    <Link to="/login">
                        <input type="button" defaultValue={this.state.text.back}></input>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default connect(UserSelector, UserDispatch)(DefaultComponent(ForgotPassword))
