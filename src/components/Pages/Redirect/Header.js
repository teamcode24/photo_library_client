import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AuthComponent from '../../Extend/Default/AuthComponent'

import { fade, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const HeaderStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    header: {
        color: theme.palette.common.black,
        backgroundColor: theme.palette.common.white,

    },
    search: {
        position: 'relative',
        flexGrow: 1,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.common.white,
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.05),
        }
    },
    searchIcon: {
        position: 'absolute',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 2),
    },
    searchInputRoot: {
        color: 'inherit',
        width: '100%',
    },
    searchInputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    iconButton: {
        minWidth: "50px",
    },
    actionButton: {
        minWidth: '100px',
        textTransform: 'capitalize',
        marginLeft: theme.spacing(2),
    },
    joinButton: {
        color: theme.palette.common.white,
        backgroundColor: '#37a866',
        '&:hover': {
            backgroundColor: '#37a866',
        },
    },
})

class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className={this.props.classes.root}>
            <AppBar position="static" className={this.props.classes.header}>
                <Toolbar>
                    <IconButton edge="start" className={this.props.classes.menuButton} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <div className={this.props.classes.search}>
                        <div className={this.props.classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search"
                            classes={{
                                root: this.props.classes.searchInputRoot,
                                input: this.props.classes.searchInputInput,
                            }}
                        />
                    </div>
                    <Button component={RouterLink} to="/t" color="inherit" className={this.props.classes.actionButton}>
                        Topics
                    </Button>
                    {!this.props.isAuthenticated && (
                        <>
                        <Button component={RouterLink} to="/login"color="inherit" className={this.props.classes.actionButton}>
                            Login
                        </Button>
                        <Button component={RouterLink} to="/join" color="inherit" className={`${this.props.classes.actionButton} ${this.props.classes.joinButton}`}>
                            Join free
                        </Button>
                        </>
                    )}
                    {this.props.isAuthenticated && (
                        <>
                        <Button component={RouterLink} to="/" color="inherit" className={this.props.classes.iconButton}>
                            <NotificationsIcon />
                        </Button>
                        <Button component={RouterLink} to="/" color="inherit" className={this.props.classes.iconButton}>
                            <AccountCircleIcon />
                        </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default AuthComponent(withStyles(HeaderStyles, { withTheme: true })(Header))
