import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import DefaultComponent from '../../Extend/Default/DefaultComponent';
import PathName from '../../App/PathName';
import GlobalDispatch from '../../../services/store/GlobalDispatch';

import { fade, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';

const HeaderStyles = (theme) => ({
  root: {
    flexGrow: 1,
    position: 'sticky',
    top: '0px',
    zIndex: theme.zIndex.appBar,
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
    },
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
    minWidth: '50px',
  },
  actionButton: {
    minWidth: '100px',
    textTransform: 'capitalize',
    '&:not(:last-child)': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    '&:last-child': {
      marginLeft: theme.spacing(1),
    },
  },
  uploadButton: {
    border: '1px solid #ccc',
    minWidth: '150px',
  },
  divider: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  joinButton: {
    color: theme.palette.common.white,
    backgroundColor: '#37a866',
    '&:hover': {
      backgroundColor: '#37a866',
    },
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  render = () => (
    <div className={this.props.classes.root}>
      <AppBar position="sticky" className={this.props.classes.header}>
        <Toolbar>
          <RouterLink to={'/'}>
            <img
              src="/images/home-icon.svg"
              alt="home-icon"
              style={{ height: 60, width: 60, marginRight: 20 }}
            />
          </RouterLink>
          <div className={this.props.classes.search}>
            <div className={this.props.classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: this.props.classes.searchInputRoot,
                input: this.props.classes.searchInputInput,
              }}
            />
          </div>

          <Button
            component={RouterLink}
            to={PathName.topic.root}
            color="inherit"
            className={this.props.classes.actionButton}
          >
            Topics
          </Button>
          <Button
            component={RouterLink}
            to={PathName.user.join}
            color="inherit"
            className={`${this.props.classes.actionButton} ${this.props.classes.uploadButton}`}
          >
            Submit a photo
          </Button>
          <Divider
            orientation="vertical"
            flexItem
            className={this.props.classes.divider}
          />

          {!this.props.isAuthenticated() && (
            <>
              <Button
                component={RouterLink}
                to={PathName.user.login}
                color="inherit"
                className={this.props.classes.actionButton}
              >
                Login
              </Button>
              <Button
                component={RouterLink}
                to={PathName.user.join}
                color="inherit"
                className={`${this.props.classes.actionButton} ${this.props.classes.joinButton}`}
              >
                Join free
              </Button>
            </>
          )}

          {this.props.isAuthenticated() && (
            <>
              <Button
                component={RouterLink}
                to={PathName.default.root}
                color="inherit"
                className={this.props.classes.iconButton}
              >
                <NotificationsIcon />
              </Button>
              <Button
                component={RouterLink}
                to={PathName.user.account}
                color="inherit"
                className={this.props.classes.iconButton}
              >
                <AccountCircleIcon />
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default DefaultComponent(
  withStyles(HeaderStyles, { withTheme: true })(Header)
);
