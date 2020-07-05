import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AuthentSelector } from '../../../services/store/Authent/AuthentProps'
import PathName from '../../App/PathName'

const AutoRedirect = ChildComponent => {
    class AutoRedirectComponent extends React.Component {
        constructor (props) {
            super(props)
            this.state = {}
        }
        
        render () {
            var { authenticated, ...otherPros } = this.props
            if (authenticated === false) {
                console.log(this.props.location.pathname, "redirect to", PathName.user.login)
                return <Redirect to={PathName.user.login}></Redirect>
            }
            return <ChildComponent {...otherPros} />
        }
    }
    return connect(AuthentSelector, null)(AutoRedirectComponent)
}

export default AutoRedirect
