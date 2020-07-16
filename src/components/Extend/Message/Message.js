import React from 'react'
import { connect } from 'react-redux'
import GlobalDispatch from '../../../services/store/GlobalDispatch'

import { MessageSelector } from '../../../services/store/Message/MessageProps'
import { withStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'

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
    content: {
        position: "relative",
    },
    close: {
        position: "absolute",
        top: "0px",
        right: "0px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
    },
})

class Message extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    onCloseClick = () => {
        GlobalDispatch.message.hide()
    }

    render = () => (
        <>
        {this.props.message.show === true &&
            <div className={this.props.classes.root}>
                <div className={this.props.classes.content}>
                <div>{this.props.message.content}</div>
                <div className={this.props.classes.close}>
                        <CloseIcon onClick={this.onCloseClick} />
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default connect(MessageSelector)(withStyles(MessageStyles, { theme: true })(Message))
