import React from 'react'
import { connect } from 'react-redux'
import { Link as RouterLink } from "react-router-dom"
import GlobalDispatch from '../../../services/store/GlobalDispatch'

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
    text_link: {
        color: "#ccc",
        fontStyle: "italic",
    },
    text_bold: {
        fontWeight: "bold",
    },
    text_italic: {
        fontStyle: "italic",
    },
    type_dark: {
        color: "white",
        backgroundColor: "black",
    },
    type_light: {
        color: "black",
        backgroundColor: "#f8f9fa",
    },
    type_success: {
        color: "white",
        backgroundColor: "#28a745",
    },
    type_danger: {
        color: "white",
        backgroundColor: "#dc3545",
    },
    type_warning: {
        color: "white",
        backgroundColor: "#ffc107",
    },
    type_info: {
        color: "white",
        backgroundColor: "#17a2b8",
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
        var items = data.items ?? []
        var result = []
        for (var i=0; i<items.length; i++) {
            var item = items[i]
            var itemClasses = item.classes ?? []
            if (content.indexOf(item.name) !== -1) {
                var cuts = content.split(item.name)
                if (cuts[0].length > 0) {
                    result.push(
                        <span key={'span0' + i}>{cuts[0]}</span>
                    )
                }
                if (item.type === 'link') {
                    itemClasses.push("link")
                    var linkClasses = itemClasses.map(x => this.props.classes['text_' + x]).join(" ")
                    result.push(
                        <Link key={item.name} className={linkClasses} component={RouterLink} to={item.link}>{item.text}</Link>
                    )
                } else {
                    var textClasses = itemClasses.map(x => this.props.classes['text_' + x]).join(" ")
                    result.push(
                        <span key={'span1' + i} className={textClasses}>{item.text}</span>
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
                <div className={`${this.props.classes.root} type_${this.props.notify.type ?? "dark"}`}>
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
