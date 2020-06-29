import React from 'react'

class Photos extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <>
            {this.props.slide}
        </>
    )
}

export default Photos
