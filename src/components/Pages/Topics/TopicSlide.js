import React from 'react'
import { connect } from 'react-redux'
import { TopicsSelector, TopicsDispatch } from '../../../services/store/Topics/TopicsProps'
import DefaultComponent from '../../Extend/Default/DefaultComponent'
import TopicCard from './TopicCard'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const TopicSlideStyles = theme => ({
    root: {},
})

class TopicSlide extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.loadTopicList()
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.loadTopicList()
        }
    }

    loadTopicList = () => {
        var data = {
            path: this.props.match.url
        }
        this.props.onLoading()
        this.props.autoCancelRequest(this.props.getTopics(data))
        .then(res => {
            this.props.offLoading()
        })
        .catch(err => {
            if (err.reason === 'unmounted') {
                console.log("Component has unmounted")
            } else {
                this.props.offLoading()
            }
        })
    }

    render = () => (
        <div className={this.props.classes.root}>
            <h2>All topics</h2>
            {this.props.topics.length > 0 &&
                <Grid container spacing={3}>
                    {this.props.topics.map((itemTopic, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <TopicCard itemTopic={itemTopic}></TopicCard>
                        </Grid>
                    ))}
                </Grid>
            }
        </div>
    )
}

TopicSlide.defaultProps = {
    topics: [],
}

export default connect(TopicsSelector, TopicsDispatch)(DefaultComponent(withStyles(TopicSlideStyles, { theme: true })(TopicSlide)))
