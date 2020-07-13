import React from 'react'

import { withStyles } from '@material-ui/core/styles'

const MessageStyles = theme => ({
    root: {
        position: "sticky",
        top: "0px",
        padding: theme.spacing(1),
        color: theme.palette.common.white,
        backgroundColor: theme.palette.common.black,
        zIndex: theme.zIndex.snackbar,
        textAlign: "center",
    },
})

class Message extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className={this.props.classes.root}>
            <div>Your account was successfully updated, but we need to verify your new email address.</div>
            <div>Please check your email and follow the link to confirm your new address.</div>
        </div>
    )
}

export default withStyles(MessageStyles, { theme: true })(Message)
