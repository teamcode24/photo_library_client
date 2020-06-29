import React from 'react'
import { connect } from 'react-redux'
import { TopicsSelector, TopicsDispatch } from '../../../services/store/Topics/TopicsMapping'
import AuthComponent from '../../Extend/Default/AuthComponent'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

const TopicCardStyles = theme => ({
    root: {},
    media: {
        height: 150,
    },
    title: {},
})

class TopicCard extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <Card className={this.props.classes.root}>
            <CardMedia
                classes={{
                    root: this.props.classes.media
                }}
                image={this.props.topic.backgroundImage}
            />

            <Typography className={this.props.classes.title}>
                {this.props.itemTopic.title}
            </Typography>

        </Card>
        // <div className={this.props.classes.root}>
        //     <img src={this.props.backgroundImage}></img>
        //     <div>{this.props.title.title}</div>
        //     {/* <img src={this.props.avatar}></img> */}
        //     <div>by {this.props.creator}</div>
        //     <div>{this.props.description}</div>
        //     <div>{this.props.contributors} contributions</div>
        // </div>
    )
}

export default connect(TopicsSelector, TopicsDispatch)(AuthComponent(withStyles(TopicCardStyles, { theme: true })(TopicCard)))
