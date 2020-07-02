import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserSelector, UserDispatch } from '../../services/store/User/UserMapping'
import DefaultComponent from '../Extend/Default/DefaultComponent'
import { withTranslation } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const ForgotPasswordStyles = theme => ({
    root: {
        padding: theme.spacing(2, 0),
    },
    item: {
        padding: theme.spacing(1, 0),
    },
    fieldInput: {
        width: "100%",
        height: theme.spacing(4),
        padding: theme.spacing(0.5, 1),
        boxSizing: "border-box",
    },
})

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
        var data = {
            email: this.state.email,
        }
        if (data.email.length === 0) {
        } else {
            this.props.autoCancelRequest(this.props.resetPassword(data))
                .then(res => {
                    this.props.redirect("/login", "", {
                        type: "success",
                        message: this.props.t('user.forgot_password.message_success'),
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
                    <h2>{this.props.t('user.forgot_password.title')}</h2>
                </Grid>
                <Grid item xs={12} className={this.props.classes.item}>
                    <div>{this.props.t('user.forgot_password.description')}</div>
                </Grid>
                <Grid item xs={12} className={this.props.classes.item}>
                    <input type="email" placeholder="Email" className={this.props.classes.fieldInput}
                        value={this.state.email} onChange={this.props.setInputState(this, "email")}
                    ></input>
                </Grid>
                <Grid item xs={12} className={this.props.classes.item}>
                    <input type="button" className={this.props.classes.fieldInput}
                        defaultValue={this.props.t('user.forgot_password.submit')}onClick={this.onSubmitClick}
                    ></input>
                </Grid>
                <Grid item xs={12} className={this.props.classes.item}>
                    <Link to="/login">
                        <input type="button" className={this.props.classes.fieldInput}
                            defaultValue={this.props.t('user.forgot_password.back')}
                        ></input>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default connect(UserSelector, UserDispatch)(DefaultComponent(withTranslation()(withStyles(ForgotPasswordStyles, { theme: true })(ForgotPassword))))
