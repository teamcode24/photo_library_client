import React from 'react'
import AuthComponent from '../../Extend/Default/AuthComponent'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'

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

    componentDidMount() {
        console.log(this.props.itemTopic)
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
                <Typography>
                    <Typography variant="h6" className={this.props.classes.title}>
                        {this.props.itemTopic.title}
                    </Typography>
                    <Typography variant="subtitle2">
                        by {this.props.itemTopic.creator}
                    </Typography>
                </Typography>
                
                <Typography variant="body2" className={this.props.classes.description} className="ellipse-dot-2">
                    {this.props.itemTopic.description}
                </Typography>
                <Typography variant="body2" className={this.props.classes.contributions}>
                    {this.props.itemTopic.contributors} contributions
                </Typography>
            </CardContent>
        </Card>
    )
}

export default AuthComponent(withStyles(TopicCardStyles, { theme: true })(TopicCard))
