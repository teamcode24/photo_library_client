import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserSelector, UserDispatch } from '../../services/store/User/UserProps'
import DefaultComponent from '../Extend/Default/DefaultComponent'
import PathName from '../App/PathName'

import { withTranslation } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

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
            this.props.autoCancelRequest(this.props.createUser(data))
                .then(res => {
                    this.props.redirect("/login", "", {
                        type: "success",
                        message: this.props.t('user.register.message_success'),
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
                    <div className={this.props.classes.loginText}>
                        <div>{this.props.t('user.register.register_ask')}</div>
                        <Link to={PathName.user.login}>{this.props.t('user.register.back')}</Link>
                    </div>
                </Grid>
                <Grid item xs={12} container direction="row" className={this.props.classes.item}>
                    <Grid item xs={6} style={{paddingRight: '10px'}}>
                        <div>{this.props.t('user.register.first_name')}</div>
                        <input type="text" className={this.props.classes.fieldInput}
                            value={this.state.firstName} onChange={this.props.setInputState(this, "firstName")}
                        ></input>
                    </Grid>
                    <Grid item xs={6} style={{paddingLeft: '10px'}}>
                        <div>{this.props.t('user.register.last_name')}</div>
                        <input type="text" className={this.props.classes.fieldInput}
                            value={this.state.lastName} onChange={this.props.setInputState(this, "lastName")}
                        ></input>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={this.props.classes.item}>
                    <div>{this.props.t('user.register.email')}</div>
                    <input type="email" className={this.props.classes.fieldInput}
                        value={this.state.email} onChange={this.props.setInputState(this, "email")}
                    ></input>
                </Grid>
                <Grid item xs={12} className={this.props.classes.item}>
                    <div>{this.props.t('user.register.username')}</div>
                    <input type="text"  className={this.props.classes.fieldInput}
                        value={this.state.username} onChange={this.props.setInputState(this, "username")}
                    ></input>
                </Grid>
                <Grid item xs={12} className={this.props.classes.item}>
                    <div>{this.props.t('user.register.password')}</div>
                    <input type="password" className={this.props.classes.fieldInput}
                        value={this.state.password} onChange={this.props.setInputState(this, "password")}
                    ></input>
                </Grid>
                <Grid item xs={12} className={this.props.classes.item}>
                    <input type="button" className={this.props.classes.fieldInput}
                        defaultValue={this.props.t('user.register.submit')} onClick={this.onSubmitClick}
                    ></input>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default connect(UserSelector, UserDispatch)(DefaultComponent(withTranslation()(withStyles(RegisterStyles, { theme: true })(Register))))
