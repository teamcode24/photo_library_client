import React from 'react'
import { connect } from 'react-redux'
import { AccountSelector, AccountDispatch } from '../../../services/store/Account/AccountMapping'
import AuthComponent from '../../Extend/Default/AuthComponent'

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
        <div className="account-panel">
            <div className="account-info">
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

export default connect(AccountSelector, AccountDispatch)(AuthComponent(Account))
