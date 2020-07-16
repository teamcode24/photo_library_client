import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserSelector, UserDispatch } from '../../../services/store/User/UserProps'
import DefaultComponent from '../../Extend/Default/DefaultComponent'
import PathName from '../../App/PathName'
import GlobalDispatch from '../../../services/store/GlobalDispatch'

import { withTranslation } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import InputField from '../../Extend/UI/InputField'

const RegisterStyles = theme => ({
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
    loginText: {
        display: "flex",
        justifyContent: "center",
    },
})

class Register extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
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
            this.props.onLoading()
            this.props.autoCancelRequest(this.props.createUser(data))
                .then(res => {
                    GlobalDispatch.notify.show({
                        content: res.data.message
                    })
                    if (res.data.success === true) {
                        this.props.redirect("/login", "", {
                            type: "success",
                            message: this.props.t('user.register.message_success'),
                        })
                    }
                    this.props.offLoading()
                    
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
            <Grid item container xs={10} sm={8} md={6} lg={5}>
                <Grid item xs={12}>
                    <div className={this.props.classes.loginText}>
                        <div>{this.props.t('user.register.register_ask')}</div>
                        <Link to={PathName.user.login}>{this.props.t('user.register.back')}</Link>
                    </div>
                </Grid>
                <Grid item xs={12} container direction="row">
                    <Grid item xs={6} style={{paddingRight: '10px'}}>
                        <InputField
                            title={this.props.t('user.register.first_name')}
                            input={{
                                type: "text",
                                value: this.state.firstName,
                                onChange: this.props.setInputState(this, "firstName"),
                            }}
                        ></InputField>
                    </Grid>
                    <Grid item xs={6} style={{paddingLeft: '10px'}}>
                        <InputField
                            title={this.props.t('user.register.last_name')}
                            input={{
                                type: "text",
                                value: this.state.lastName,
                                onChange: this.props.setInputState(this, "lastName"),
                            }}
                        ></InputField>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        title={this.props.t('user.register.email')}
                        input={{
                            type: "email",
                            value: this.state.email,
                            onChange: this.props.setInputState(this, "email"),
                        }}
                    ></InputField>
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        title={this.props.t('user.register.username')}
                        input={{
                            type: "text",
                            value: this.state.username,
                            onChange: this.props.setInputState(this, "username"),
                        }}
                    ></InputField>
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        title={this.props.t('user.register.password')}
                        input={{
                            type: "password",
                            value: this.state.password,
                            onChange: this.props.setInputState(this, "password"),
                        }}
                    ></InputField>
                </Grid>
                <Grid item xs={12}>
                    <InputField
                        input={{
                            type: "button",
                            defaultValue: this.props.t('user.register.submit'),
                            onClick: this.onSubmitClick,
                        }}
                    ></InputField>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default connect(UserSelector, UserDispatch)(DefaultComponent(withTranslation()(withStyles(RegisterStyles, { theme: true })(Register))))
