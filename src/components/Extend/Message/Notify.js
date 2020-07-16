import React from 'react'
import { connect } from 'react-redux'
import { Link as RouterLink } from "react-router-dom"
import GlobalDispatch from '../../../services/store/GlobalDispatch'
import Typography from '@material-ui/core/Typography'

import { NotifySelector } from '../../../services/store/Message/NotifyProps'
import { withStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import Link from '@material-ui/core/Link'

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
        height: "100%",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
    },
    link: {
        color: "#ccc",
    },
    text_bold: {
        fontWeight: "bold",
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

    loadItems = data => {
        var content = data.content
        var items = data.items
        var itemLen = data.items?.length ?? 0
        var result = []
        for (var i=0; i<itemLen; i++) {
            var item = items[i]
            if (content.indexOf(item.name) !== -1) {
                var cuts = content.split(item.name)
                if (cuts[0].length > 0) {
                    result.push(
                        <span key={'span0' + i}>{cuts[0]}</span>
                    )
                }
                if (item.type === 'link') {
                    result.push(
                        <Link key={item.name} className={this.props.classes.link} component={RouterLink} to={item.link}>{item.text}</Link>
                    )
                } else {
                    var itemClasses = item.classes?.map(x => this.props.classes['text_' + x]) ?? ""
                    result.push(
                        <span key={'span1' + i} className={itemClasses}>{item.text}</span>
                    )
                }
            }
            content = cuts[1]
        }
        if (content.length > 0) result.push(content)
        return (result)
    }

    render = () => (
        <>
            {this.props.notify.show === true &&
                <div className={this.props.classes.root}>
                    <div className={this.props.classes.content}>
                        <div>{this.loadItems(this.props.notify)}</div>
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
