import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserSelector, UserDispatch } from '../../../services/store/User/UserProps'
import DefaultComponent from '../../Extend/Default/DefaultComponent'
import PathName from '../../App/PathName'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import InputField from '../../Extend/UI/InputField'
import { withTranslation } from 'react-i18next'

const LoginStyles = theme => ({
    root: {
        padding: theme.spacing(2, 0),
    },
    container: {
        "& > *": {
            padding: theme.spacing(1, 0),
        }
    },
    submit: {
        marginTop: theme.spacing(2),
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
        }
    }

    onSubmitClick = e => {
        var data = {
            email: this.state.email,
            password: this.state.password,
            remember: true,
        }
        if (data.email.length !== 0) {
            this.props.remember(data)
        }
        if (data.email.length === 0 || data.password.length === 0) {
        } else {
            this.props.onLoading()
            this.props.autoCancelRequest(this.props.login(data))
                .then(res => {
                    this.props.offLoading()
                    this.props.redirect("/account", "", {
                        type: "success",
                        message: this.props.t('user.login.message_success'),
                    })
                })
                .catch(err => {
                    if (err.reason === 'unmounted') {
                        console.log("Component has unmounted")
                    } else {
                        this.props.offLoading()
                    }
                })
        }
    }

    render = () => (
        <Grid container direction="column" className={this.props.classes.root} alignItems="center">
            <Grid item container xs={10} sm={8} md={6} lg={5} className={this.props.classes.container}>
                <Grid item xs={12}>
                    <InputField
                        title={this.props.t('user.login.email')}
                        input={{
                            type: "email",
                            value: this.state.email,
                            onChange: this.props.setInputState(this, "email"),
                        }}
                    ></InputField>
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        title={this.props.t('user.login.password')}
                        input={{
                            type: "password",
                            value: this.state.password,
                            onChange: this.props.setInputState(this, "password"),
                        }}
                    >
                        <Link to={PathName.user.forgot_password}>{this.props.t('user.login.forgot_password')}</Link>
                    </InputField>
                </Grid>
                <Grid item xs={12} className={`${this.props.classes.item} ${this.props.classes.submit}`}>
                    <InputField
                        input={{
                            type: "button",
                            defaultValue: this.props.t('user.login.submit'),
                            onClick: this.onSubmitClick,
                        }}
                    ></InputField>
                </Grid>
                <Grid item xs={12}>
                    <div className={this.props.classes.joinText}>
                        <div>{this.props.t('user.login.signup_ask')}</div>
                        <Link to={PathName.user.join}>{this.props.t('user.login.signup_text')}</Link>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default connect(UserSelector, UserDispatch)(DefaultComponent(withTranslation()(withStyles(LoginStyles, { theme: true })(Login))))
