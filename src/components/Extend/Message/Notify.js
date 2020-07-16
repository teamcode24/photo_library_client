import React from 'react'
import { connect } from 'react-redux'
import GlobalDispatch from '../../../services/store/GlobalDispatch'

import { NotifySelector } from '../../../services/store/Message/NotifyProps'
import { withStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'

const NotifyStyles = theme => ({
    root: {
        height: theme.spacing(3),
        padding: theme.spacing(1),
        color: theme.palette.common.white,
        backgroundColor: theme.palette.common.black,
        zIndex: theme.zIndex.snackbar,
        textAlign: "center",
        position: "sticky",
    },
    content: {
        position: "relative",
    },
    close: {
        position: "absolute",
        top: "0px",
        right: "0px",
        cursor: "pointer",
    },
})

class Notify extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    onCloseClick = () => {
        GlobalDispatch.notify.hide()
    }

    render = () => (
        <>
            {this.props.notify.show === true &&
                <div className={this.props.classes.root}>
                    <div className={this.props.classes.content}>
                        <div>{this.props.notify.content}</div>
                        <div className={this.props.classes.close}>
                            <CloseIcon onClick={this.onCloseClick} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default connect(NotifySelector)(withStyles(NotifyStyles, { theme: true })(Notify))
