import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthComponent from '../../Extend/Default/AuthComponent'
import Topics from '../Redirect/Topics/Topics'
import Footer from '../Redirect/Footer/Footer'
import TopicInfo from '../TopicInfo/TopicInfo'
import CardSlide from '../CardSlide/CardSlide'

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
        // <div className={this.props.classes.root}>
        <div>
            <Topics></Topics>
            {/* <BrowserRouter>
                <Switch>
                    <Route exact path="/t/:topic" component={TopicInfo}></Route>
                    <Route exact path="/s/:search" component={Home}></Route>
                    <Route path="/*" component={Home}></Route>
                </Switch>
            </BrowserRouter> */}
            <CardSlide></CardSlide>
            <Footer></Footer>
        </div>
    )
}

export default connect(null, null)(AuthComponent(withStyles(HomeStyles, { theme: true })(Home)))
