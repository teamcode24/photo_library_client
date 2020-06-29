import React from 'react'

class Topics extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div>Topic layout 1</div>
    )
}

Topics.defaultProps = {
    topic: '',
    slide: '',
}

export default Topics
