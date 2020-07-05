import React from 'react'
import { connect } from 'react-redux'
import { TopicsSelector, TopicsDispatch } from '../../../services/store/Topics/TopicsProps'
import DefaultComponent from '../../Extend/Default/DefaultComponent'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

const TopicInfoStyles = theme => ({
    root: {
        margin: theme.spacing(2, 0),
        "& > *:not(:last-child)": {
            marginBottom: theme.spacing(1.5),
        },
    },
    title: {
        textTransform: "capitalize",
    },
    description: {
        overflow: "hidden",
        display: '-webkit-box',
        WebkitLineClamp: 2,
    },
})

class TopicInfo extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.getTopicInfo()
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.getTopicInfo()
        }
    }

    getTopicInfo = () => {
        var data = {
            path: this.props.match.params[0]
        }
        this.props.onLoading()
        this.props.autoCancelRequest(this.props.getTopic(data))
        .then(res => {
            this.props.offLoading()
        })
        .catch(err => {
            if (err.reason === 'unmounted') {
                console.log("Component has unmounted")
            } else {
            }
        })
    }

    render = () => (
        <div className={this.props.classes.root}>
            <Typography variant="h6" className={this.props.classes.title}>
                {this.props.topicInfo.title}
            </Typography>
            <Typography variant="body2" className={`${this.props.classes.description} ellipse-dot-2`}>
                {this.props.topicInfo.description}
            </Typography>
            <Avatar alt={this.props.topicInfo.creator} src={this.props.topicInfo.avatar}></Avatar>
            <Typography variant="subtitle2">
                Created by {this.props.topicInfo.creator}
            </Typography>
        </div>
    )
}

export default connect(TopicsSelector, TopicsDispatch)(DefaultComponent(withStyles(TopicInfoStyles, { theme: true })(TopicInfo)))
