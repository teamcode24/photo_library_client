import React from 'react'

import { withStyles } from '@material-ui/core/styles'

const VerifyEmailStyles = theme => ({
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

class VerifyEmail extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className={this.props.classes.root}>
            <div>Your email: ... has not been confirmed</div>
        </div>
    )
}

export default withStyles(VerifyEmailStyles, { theme: true })(VerifyEmail)