import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserSelector, UserDispatch } from '../../../services/store/User/UserProps'
import DefaultComponent from '../../Extend/Default/DefaultComponent'
import { withTranslation } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import InputField from '../../Extend/UI/InputField'
import PathName from '../../App/PathName'

const ForgotPasswordStyles = theme => ({
    root: {
        padding: theme.spacing(2, 0),
    },
    container: {
        "& > *": {
            padding: theme.spacing(1, 0),
        }
    },
})

class ForgotPassword extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
        }
    }

    onSubmitClick = e => {
        var data = {
            email: this.state.email,
        }
        if (data.email.length === 0) {
        } else {
            this.props.onLoading()
            this.props.autoCancelRequest(this.props.resetPassword(data))
                .then(res => {
                    this.props.offLoading()
                    this.props.redirect(PathName.user.login, "", {
                        type: "success",
                        message: this.props.t('user.forgot_password.message_success'),
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
                    <h2>{this.props.t('user.forgot_password.title')}</h2>
                </Grid>
                <Grid item xs={12}>
                    <div>{this.props.t('user.forgot_password.description')}</div>
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        input={{
                            type: "email", placeholder: "Email",
                            value: this.state.email,
                            onChange: this.props.setInputState(this, "email"),
                        }}
                    ></InputField>
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        input={{
                            type: "button",
                            defaultValue: this.props.t('user.forgot_password.submit'),
                            onClick: this.onSubmitClick,
                        }}
                    ></InputField>
                </Grid>
                <Grid item xs={12}>
                    <Link to={PathName.user.login}>
                        <InputField
                            input={{
                                type: "button",
                                defaultValue: this.props.t('user.forgot_password.back'),
                            }}
                        ></InputField>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default connect(UserSelector, UserDispatch)(DefaultComponent(withTranslation()(withStyles(ForgotPasswordStyles, { theme: true })(ForgotPassword))))
