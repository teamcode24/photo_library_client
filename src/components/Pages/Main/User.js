import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../../User/Login'
import ForgotPassword from '../../User/ForgotPassword'
import Register from '../../User/Register'
import Account from '../../User/Account'
import PathName from '../../App/PathName'
import DefaultComponent from '../../Extend/Default/DefaultComponent'

import { withStyles } from '@material-ui/core/styles'

const HomeStyles = theme => ({
    root: {
        padding: theme.spacing(0, 3),
    },
})

class User extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className={this.props.classes.root}>
            <Switch>
                <Route exact path={PathName.user.forgot_password} component={ForgotPassword}></Route>
                <Route exact path={PathName.user.login} component={Login}></Route>
                <Route exact path={PathName.user.join} component={Register}></Route>
                <Route exact path={PathName.user.account} component={Account}></Route>
                <Route exact path={PathName.user.root} component={Account}></Route>
                <Route path={PathName.user.any} component={Account}></Route>
            </Switch>
        </div>
    )
}

export default DefaultComponent(withStyles(HomeStyles, { theme: true })(User))
