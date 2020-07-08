import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TopicsLayout from './Layout/TopicsLayout'
import PhotosLayout from './Layout/PhotosLayout'
import PathName from '../../App/PathName'

import DefaultComponent from '../../Extend/Default/DefaultComponent'
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
                <Route exact path={PathName.topic.root} component={TopicsLayout}></Route>
                <Route exact path={PathName.topic.any} component={TopicsLayout}></Route>
                <Route exact path={PathName.photo.photos} component={PhotosLayout}></Route>
                <Route path={PathName.default.any} component={PhotosLayout}></Route>
            </Switch>
            <Footer></Footer>
        </div>
    )
}

export default DefaultComponent(withStyles(HomeStyles, { theme: true })(Home))
