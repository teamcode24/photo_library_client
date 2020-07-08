import React from 'react'

import { withStyles } from '@material-ui/core/styles'

const InputFieldStyles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    header: {},
    name: {},
    content: {},
    input: {},
})

class InputField extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => {
        const {name, ...otherPros} = this.props
        return (
            <div className={this.props.classes.root}>
                <div className={this.props.classes.header}>
                    <div className={this.props.classes.name}>{this.props.name}</div>
                </div>
                <div className={this.props.classes.content}>
                    <input {...otherPros}
                        className={this.props.classes.input}
                    ></input>
                </div>
            </div>
        )
    }
}

export default withStyles(InputFieldStyles, { theme: true })(InputField)
