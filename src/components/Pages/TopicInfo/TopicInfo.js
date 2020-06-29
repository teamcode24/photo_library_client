import React from 'react'
import { connect } from 'react-redux'
import { TopicsSelector, TopicsDispatch } from '../../../services/store/Topics/TopicsMapping'
import AuthComponent from '../../Extend/Default/AuthComponent'

import { withStyles } from '@material-ui/core/styles'

const TopicInfoStyles = theme => ({
    root: {
        padding: theme.spacing(0, 3),
    },
})

class TopicInfo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className={this.props.classes.root}>
            <div>{this.props.title}</div>
            <div>{this.props.description}</div>
            <img src={this.props.avatar}></img>
            <div>by {this.props.creator}</div>
        </div>
    )
}

export default connect(TopicsSelector, TopicsDispatch)(AuthComponent(withStyles(TopicInfoStyles, { theme: true })(TopicInfo)))
