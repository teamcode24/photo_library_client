import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import DefaultComponent from '../../Extend/Default/DefaultComponent'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'

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
    avatar: {
        width: theme.spacing(6),
        height: theme.spacing(6),
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
            <Link component={RouterLink} to={"/t/" + this.props.itemTopic.title} color="inherit">
            <CardMedia
                classes={{
                    root: this.props.classes.media
                }}
                component="img"
                image={this.props.itemTopic.backgroundImage}
            />
            </Link>
            <CardContent className={this.props.classes.content}>
                <Grid container direction="row" alignItems="center" justify="space-between">
                    <Grid item>
                        <Typography variant="h6" className={this.props.classes.title}>
                            <Link component={RouterLink} to={"/t/" + this.props.itemTopic.title} color="inherit">{this.props.itemTopic.title}</Link>
                        </Typography>
                        <Typography variant="subtitle2">
                            by {this.props.itemTopic.creator}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar alt={this.props.itemTopic.creator}
                            className={this.props.classes.avatar}
                            src={this.props.itemTopic.avatar}
                        ></Avatar>
                    </Grid>
                </Grid>
                
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
