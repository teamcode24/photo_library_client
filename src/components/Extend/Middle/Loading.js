import React from 'react'
import './Loading.css'

const Loading = ChildComponent => {
    class LoadingComponent extends React.Component {
        constructor (props) {
            super(props)
            this.state = {
                onLoading: false
            }
        }

        turnOnLoading = () => {
            this.setState({ onLoading: true })
        }
    
        turnOffLoading = () => {
            this.setState({ onLoading: false })
        }
    
        getLoadingClass = () => {
            if (this.state.onLoading === true) {
                return " on-loading"
            }
            return ""
        }

        render() {
            return <ChildComponent {...this.props}
                turnOnLoading={this.turnOnLoading}
                turnOffLoading={this.turnOffLoading}
                getLoadingClass={this.getLoadingClass}
            />
        }
    }
    return LoadingComponent
}

export default Loading
