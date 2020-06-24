import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}))

class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className={"header-panel" + this.props.classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={this.props.classes.menuButton} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={this.props.classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            {/* <Link to="/t" className="header-item">
                <div>Topics</div>
            </Link>
            <Link to="/login" className="header-item">
                <div>Login</div>
            </Link>
            <Link to="/join" className="header-item">
                <button>Join free</button>
            </Link> */}
            </AppBar>
        </div>
    )
}

export default withStyles(useStyles, { withTheme: true })(Header)
