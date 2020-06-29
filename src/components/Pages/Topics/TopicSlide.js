import React from 'react'
import { connect } from 'react-redux'
import { TopicsSelector, TopicsDispatch } from '../../../services/store/Topics/TopicsMapping'
import AuthComponent from '../../Extend/Default/AuthComponent'
import CardTopic from './TopicCard'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const TopicSlideStyles = theme => ({
    root: {
        padding: theme.spacing(0, 3),
    },
})

class TopicSlide extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className={this.props.classes.root}>
            <div>Topic Slide</div>
            <Grid container spacing={3}>
                {this.props.topics.map((photo, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <CardTopic photo={photo}></CardTopic>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default connect(TopicsSelector, TopicsDispatch)(AuthComponent(withStyles(TopicSlideStyles, { theme: true })(TopicSlide)))
