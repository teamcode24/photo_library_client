import React from "react"
import { connect } from 'react-redux'
import DefaultComponent from "../../Extend/Default/DefaultComponent"
import { SidebarSelector } from '../../../services/store/Sidebar/SidebarProps'
import GlobalDispatch from '../../../services/store/GlobalDispatch'

import { withStyles } from "@material-ui/core/styles"
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const SidebarStyles = theme => ({
    root: {},
    header: {
        height: "64px",
        display: "flex",
        alignItems: "center",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    list: {
        width: "250px",
    },
})

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    displaySidebar = status => e => {
        if (status) {
            GlobalDispatch.sidebar.show()
        } else {
            GlobalDispatch.sidebar.hide()
        }
    }

    changeLanguage = lng => {
        //GlobalDispatch.language.change(lng)
    }

    render = () => (
        <div className={this.props.classes.root}>
            <SwipeableDrawer
                // anchor="left"
                open={this.props.isOpen}
                onOpen={this.displaySidebar(true)}
                onClose={this.displaySidebar(false)}
            >
                <div className={this.props.classes.header}>
                    <IconButton onClick={this.displaySidebar(false)}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List className={this.props.classes.list}>
                    {/* <ListItem button>
                        <ListItemText primary="English" onClick={this.changeLanguage('en')} />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Tiếng Việt" onClick={this.changeLanguage('vi')} />
                    </ListItem> */}
                </List>
            </SwipeableDrawer>
        </div>
    )
}

export default connect(SidebarSelector, null)(DefaultComponent(withStyles(SidebarStyles, { withTheme: true })(Sidebar)))
