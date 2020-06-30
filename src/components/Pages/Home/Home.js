import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import TopicsLayout from './Layout/TopicsLayout'
import PhotosLayout from './Layout/PhotosLayout'

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

    render = () => (
        <div className={this.props.classes.root}>
            <Topics></Topics>
            <Switch>
                <Route exact path="/t" component={TopicsLayout}></Route>
                <Route exact path="/t/*" component={TopicsLayout}></Route>
                <Route exact path="/photos" component={PhotosLayout}></Route>
                <Route path="/*" component={PhotosLayout}></Route>
            </Switch>
            <Footer></Footer>
        </div>
    )
}

export default connect(null, null)(AuthComponent(withStyles(HomeStyles, { theme: true })(Home)))
