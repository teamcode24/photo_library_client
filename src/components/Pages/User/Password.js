import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserSelector, UserDispatch } from '../../../services/store/User/UserProps'
import AuthComponent from '../../Extend/Default/AuthComponent'
import PathName from '../../App/PathName'

import { withTranslation } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import InputField from '../../Extend/UI/InputField'

const ForgotPasswordStyles = theme => ({
    root: {
        padding: theme.spacing(2, 0),
    },
    container: {
        "& > *": {
            padding: theme.spacing(1, 0),
        }
    },
    fieldInput: {
        width: "100%",
        height: theme.spacing(4),
        padding: theme.spacing(0.5, 1),
        boxSizing: "border-box",
    },
})

class Password extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            newPassword: '',
        }
    }

    onSubmitClick = e => {
        var data = {
            newPassword: this.state.newPassword,
        }
        if (data.email.length === 0) {
        } else {
            // this.props.autoCancelRequest(this.props.resetPassword(data))
            //     .then(res => {
            //         this.props.redirect("/login", "", {
            //             type: "success",
            //             message: this.props.t('user.forgot_password.message_success'),
            //         })
            //     })
            //     .catch(err => {
            //         if (err.reason === 'unmounted') {
            //             console.log("Component has unmounted")
            //         } else {
            //         }
            //     })
        }
    }

    render = () => (
        <Grid container direction="column" className={this.props.classes.root} alignItems="center">
            <Grid item container xs={10} sm={8} md={6} lg={5} className={this.props.classes.container}>
                <Grid item xs={12}>
                    <h2>{this.props.t('user.password.title')}</h2>
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        input={{
                            type: "password", placeholder: "New Password",
                            value: this.state.newPassword,
                            onChange: this.props.setInputState(this, "newPassword"),
                        }}
                    ></InputField>
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        input={{
                            type: "button",
                            defaultValue: this.props.t('user.password.submit'),
                            onClick: this.onSubmitClick,
                        }}
                    ></InputField>
                </Grid>
                <Grid item xs={12}>
                    <Link to={PathName.user.login}>
                        <InputField
                            input={{
                                type: "button",
                                defaultValue: this.props.t('user.password.back'),
                            }}
                        ></InputField>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default connect(UserSelector, UserDispatch)(AuthComponent(withTranslation()(withStyles(ForgotPasswordStyles, { theme: true })(Password))))
