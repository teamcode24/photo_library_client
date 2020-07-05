import React from 'react'
import { connect } from 'react-redux'
import { FunctionsSelector } from '../../../services/store/Functions/FunctionsProps'

const Functions = ChildComponent => {
    class FunctionsComponent extends React.Component {
        constructor (props) {
            super(props)
            this.state = {}
        }

        isAuthenticated = () => {
            return this.props.authenticated === true
        }
        
        render () {
            var { authenticated, ...otherPros } = this.props
            return <ChildComponent {...otherPros}
                isAuthenticated={this.isAuthenticated}
            />
        }
    }
    return connect(FunctionsSelector, null)(FunctionsComponent)
}

export default Functions
