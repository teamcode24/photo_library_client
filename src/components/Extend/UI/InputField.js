import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withTranslation } from 'react-i18next'

const InputFieldStyles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        margin: theme.spacing(1, 0),
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: theme.spacing(1),
    },
    name: {},
    content: {},
    input: {
        width: "100%",
        height: theme.spacing(4),
        padding: theme.spacing(0.5, 1),
        boxSizing: "border-box",
    },
    buttonStyle: {
        cursor: "pointer",
    },
})

class InputField extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className={this.props.classes.root}>
            {this.props.title &&
                <div className={this.props.classes.header}>
                    <div className={this.props.classes.name}>{this.props.title}</div>
                    <div className={this.props.classes.action}>{this.props.children}</div>
                </div>
            }
            
            <div className={this.props.classes.content}>
                <input {...this.props.input}
                    className={`${this.props.classes.input} ${this.props.input.type === "button" ? this.props.classes.buttonStyle : ""}`}
                ></input>
            </div>
        </div>
    )
}

export default withTranslation()(withStyles(InputFieldStyles, { theme: true })(InputField))
