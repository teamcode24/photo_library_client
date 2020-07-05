import React from 'react'
import Loading from '../Middle/Loading'
import Redirection from '../Middle/Redirection'
import Functions from '../Middle/Functions'
import AutoCancelRequest from '../Middle/AutoCancelRequest'

const DefaultComponent = ChildComponent => {
    class DefaultComponent extends React.Component {
        constructor (props) {
            super(props)
            this.state = {}
        }

        setInputState = (component, name) => event => {
            const state = {}
            const value = event.currentTarget.value
            state[name] = value
            component.setState(state)
        }

        render() {
            return <ChildComponent {...this.props}
                setInputState={this.setInputState}
            />
        }
    }
    return AutoCancelRequest(Redirection(Loading(Functions(DefaultComponent))))
}

export default DefaultComponent
