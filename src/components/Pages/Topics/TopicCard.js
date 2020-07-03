import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import DefaultComponent from '../../Extend/Default/DefaultComponent'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import { withStyles } from '@material-ui/core/styles'

const TopicCardStyles = theme => ({
    root: {},
    content: {
        "& > *:not(:last-child)": {
            marginBottom: theme.spacing(2),
        },
    },
    media: {
        height: 150,
    },
    title: {
        textTransform: "capitalize",
    },
    description: {
        overflow: "hidden",
        display: '-webkit-box',
        WebkitLineClamp: 2,
    },
    contributions: {
        fontSize: "smaller",
    },
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
                component="img"
                image={this.props.itemTopic.backgroundImage}
            />
            <CardContent className={this.props.classes.content}>
                <div>
                    <Typography variant="h6" className={this.props.classes.title}>
                        <Link component={RouterLink} to={"/t/" + this.props.itemTopic.title} color="inherit">{this.props.itemTopic.title}</Link>
                    </Typography>
                    <Typography variant="subtitle2">
                        by {this.props.itemTopic.creator}
                    </Typography>
                </div>
                
                <Typography variant="body2" className={`${this.props.classes.description} ellipse-dot-2`}>
                    {this.props.itemTopic.description}
                </Typography>
                <Typography variant="body2" className={this.props.classes.contributions}>
                    {this.props.itemTopic.contributors} contributions
                </Typography>
            </CardContent>
        </Card>
    )
}

export default DefaultComponent(withStyles(TopicCardStyles, { theme: true })(TopicCard))
