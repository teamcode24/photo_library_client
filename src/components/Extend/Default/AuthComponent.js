import React from 'react'
import DefaultComponent from './DefaultComponent'
import AutoRedirect from '../Middle/AutoRedirect'

const AuthComponent = ChildComponent => {
    class AuthComponent extends React.Component {
        constructor (props) {
            super(props)
            this.state = {}
        }

        render() {
            return <ChildComponent {...this.props} />
        }
    }
    return AutoRedirect(DefaultComponent(AuthComponent))
}

export default AuthComponent
