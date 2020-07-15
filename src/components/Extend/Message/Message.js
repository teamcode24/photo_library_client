import React from 'react'
import { connect } from 'react-redux'

import { MessageSelector } from '../../../services/store/Message/MessageProps'
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
        <>
        {this.props.message.show === true &&
            <div className={this.props.classes.root}>
                <div>Your account was successfully updated, but we need to verify your new email address.</div>
                <div>Please check your email and follow the link to confirm your new address.</div>
            </div>
        }
        </>
    )
}

export default connect(MessageSelector)(withStyles(MessageStyles, { theme: true })(Message))
