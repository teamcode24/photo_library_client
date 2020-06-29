import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Topic from './Layout/Topics'
import Photos from './Layout/Photos'

import AuthComponent from '../../Extend/Default/AuthComponent'
import Topics from '../Redirect/Topics'
import Footer from '../Redirect/Footer'

import { withStyles } from '@material-ui/core/styles'

const HomeStyles = theme => ({
    root: {
        padding: theme.spacing(0, 3),
    },
})

class Home extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        // this.loadPhotos()
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            // this.loadPhotos()
        }
    }

    loadPhotos = () => {
        var data = {
            path: this.props.match.url
        }
        this.props.autoCancelRequest(this.props.getPhotos(data))
        .catch(err => {
            if (err.reason === 'unmounted') {
                console.log("Component has unmounted")
            } else {
            }
        })
    }

    render = () => (
        <div className={this.props.classes.root}>
            <Topics></Topics>
            <Switch>
                <Route exact path="/t" component={Topic}></Route>
                <Route exact path="/t/*" component={Topic}></Route>
                <Route exact path="/photos" component={Photos}></Route>
            </Switch>
            <Footer></Footer>
        </div>
    )
}

export default connect(null, null)(AuthComponent(withStyles(HomeStyles, { theme: true })(Home)))
