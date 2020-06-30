import React from 'react'
import { connect } from 'react-redux'
import { AccountSelector, AccountDispatch } from '../../services/store/Account/AccountMapping'
import AuthComponent from '../Extend/Default/AuthComponent'
import { withStyles } from '@material-ui/core/styles'

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
                <div className="account-name">
                    <div className="account-name-label">Name</div>
                    <div className="account-name-value">
                        {this.props.account.name}
                    </div>
                </div>
                <div className="account-email">
                    <div className="account-email-label">Email</div>
                    <div className="account-email-value">
                        {this.props.account.email}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(AccountSelector, AccountDispatch)(AuthComponent(withStyles(AccountStyles, { theme: true })(Account)))
