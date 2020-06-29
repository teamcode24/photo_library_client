import React from 'react'
import { connect } from 'react-redux'
import { TopicsSelector, TopicsDispatch } from '../../../services/store/Topics/TopicsMapping'
import AuthComponent from '../../Extend/Default/AuthComponent'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const TopicInfoStyles = theme => ({
    root: {
        padding: theme.spacing(0, 3),
    },
})

class TopicCard extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className={this.props.classes.root}>
            <img src={this.props.backgroundImage}></img>
            <div>{this.props.title}</div>
            <img src={this.props.avatar}></img>
            <div>by {this.props.creator}</div>
            <div>{this.props.description}</div>
            <div>{this.props.contributors} contributions</div>
        </div>
    )
}

export default connect(TopicsSelector, TopicsDispatch)(AuthComponent(withStyles(TopicInfoStyles, { theme: true })(TopicCard)))
