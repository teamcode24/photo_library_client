import React from 'react'
import { connect } from 'react-redux'

import { NotifySelector } from '../../../services/store/Message/NotifyProps'
import { withStyles } from '@material-ui/core/styles'

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

    },
})

class Notify extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <>
            {this.props.notify.show === true &&
                <div className={this.props.classes.root}>
                    <div className={this.props.classes.content}>
                        <div>{this.props.notify.content}</div>
                    </div>
                </div>
            }
        </>
    )
}

export default connect(NotifySelector)(withStyles(NotifyStyles, { theme: true })(Notify))
