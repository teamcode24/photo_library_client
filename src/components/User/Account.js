import React from 'react'
import { connect } from 'react-redux'
import { AccountSelector, AccountDispatch } from '../../services/store/Account/AccountProps'
import AuthComponent from '../Extend/Default/AuthComponent'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { withTranslation } from 'react-i18next'

const AccountStyles = theme => ({
    root: {
        margin: theme.spacing(2, 0),
        "& > *:not(:last-child)": {
            marginBottom: theme.spacing(1.5),
        },
    },
    content: {
        margin: theme.spacing(2),
    },
})

class Account extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    componentDidMount () {
        this.props.autoCancelRequest(this.props.getProfile())
            .catch(err => {
                if (err.reason === 'unmounted') {
                    console.log("Component has unmounted")
                } else {
                }
            })
    }


    render = () => (
        <div className={this.props.classes.root}>
            <div className={this.props.classes.content}>
                <Grid container spacing={3}>
                    <Grid item xs={12} container justify="center">
                        <Grid item xs={12} sm={6} md={4} lg={3} container>
                            <Grid item xs={4}>{this.props.t('user.account.name')}</Grid>
                            <Grid item xs={8}>{this.props.account.name}</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container justify="center">
                        <Grid item xs={12} sm={6} md={4} lg={3} container>
                            <Grid item xs={4}>{this.props.t('user.account.email')}</Grid>
                            <Grid item xs={8}>{this.props.account.email}</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default connect(AccountSelector, AccountDispatch)(AuthComponent(withTranslation()(withStyles(AccountStyles, { theme: true })(Account))))
