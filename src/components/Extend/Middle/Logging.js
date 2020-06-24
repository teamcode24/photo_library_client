import React from 'react'

export default Logging = ChildComponent => {
    return class extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('Current props: ', this.props)
            console.log('Previous props: ', prevProps)
        }
        render() {
            return <ChildComponent {...this.props} />
        }
    }
}
