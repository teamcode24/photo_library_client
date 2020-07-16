import React from 'react'

const AutoCancelRequest = ChildComponent => {
    class AutoCancelRequestComponent extends React.Component {
        constructor (props) {
            super(props)
            this.state = {}
            this.cancelablePromises = []
        }

        autoCancelRequest = request => {
            this.cancelablePromises.push(request)
            return request.promise
        }

        componentWillUnmount() {
            this.cancelablePromises.forEach(item => item.cancel("unmounted"))
        }
        
        render () {
            return <ChildComponent {...this.props}
                autoCancelRequest={this.autoCancelRequest}
            />
        }
    }
    return AutoCancelRequestComponent
}

export default AutoCancelRequest
