import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AuthentSelector } from '../../../services/store/Authent/AuthentMapping'

const Authenticate = ChildComponent => {
    class AuthencateComponent extends React.Component {
        constructor (props) {
            super(props)
            this.state = {}
        }
        
        render () {
            if (this.props.isAuthenticated === false) {
                return <Redirect to="/login"></Redirect>
            }
            return <ChildComponent {...this.props} />
        }
    }
    return connect(AuthentSelector, null)(AuthencateComponent)
}

export default Authenticate
