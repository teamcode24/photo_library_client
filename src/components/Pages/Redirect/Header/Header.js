import React from 'react'
import { Link } from 'react-router-dom'

import { fade, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = theme => ({
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
                    <Button color="inherit" className={this.props.classes.actionButton}>Topics</Button>
                    <Button color="inherit" className={this.props.classes.actionButton}>Login</Button>
                    <Button color="inherit" className={`${this.props.classes.actionButton} ${this.props.classes.joinButton}`}>Join free</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(useStyles, { withTheme: true })(Header)
