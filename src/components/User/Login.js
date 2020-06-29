import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserSelector, UserDispatch } from '../../services/store/User/UserMapping'
import DefaultComponent from '../Extend/Default/DefaultComponent'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const LoginStyles = theme => ({
    root: {
        padding: theme.spacing(2, 0),
    },
    item: {
        padding: theme.spacing(1, 0),
    },
    fieldName: {
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: theme.spacing(1),
    },
    fieldInput: {
        width: "100%",
        height: theme.spacing(4),
        padding: theme.spacing(0.5, 1),
        boxSizing: "border-box",
    },
    joinText: {
        display: "flex",
        justifyContent: "center",
    },
})

class Login extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            email: 'wewik92609@mailrnl.com',
            password: '123',
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
        <Grid container direction="column" className={this.props.classes.root} alignItems="center">
            <Grid item container xs={10} sm={8} md={6} lg={5}>
                <Grid item xs={12} className={this.props.classes.item}>
                    <div className={this.props.classes.fieldName}>Email</div>
                    <input type="email" className={this.props.classes.fieldInput}
                        value={this.state.email} onChange={this.props.setInputState(this, "email")}
                    ></input>
                </Grid>
                <Grid item xs={12} className={this.props.classes.item}>
                    <div className={this.props.classes.fieldName}>
                        <div>Password</div>
                        <Link to="/forgot_password">{this.state.text.forgot}</Link>
                    </div>
                    <input type="password" className={this.props.classes.fieldInput}
                        value={this.state.password} onChange={this.props.setInputState(this, "password")}
                    ></input>
                </Grid>
                <Grid item xs={12} className={this.props.classes.item}>
                    <input type="button" className={this.props.classes.fieldInput}
                        defaultValue={this.state.text.submit} onClick={this.onSubmitClick}
                    ></input>
                </Grid>
                <Grid item xs={12} className={this.props.classes.item}>
                    <div className={this.props.classes.joinText}>
                        <div>{this.state.text.signup_ask}</div><Link to="/join">{this.state.text.signup_text}</Link>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default connect(UserSelector, UserDispatch)(DefaultComponent(withStyles(LoginStyles, { theme: true })(Login)))
