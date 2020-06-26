import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';

const CardImageStyles = theme => ({
    root: {
        padding: theme.spacing(0, 3),
    },
    card: {
        position: "relative",
    },
    actionsTop: {
        position: "absolute",
        top: "0px",
        right: "0px",
        zIndex: "1000",
    },
    cardMedia: {
        height: "200px",
        
    },
    cardMediaActive: {
        height: "200px",
        "&::after": {
            content: "''",
            opacity: "0.25",
            backgroundColor: theme.palette.common.black,
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
        },
    },
    actionsButton: {
        color: "#aaa",
        minWidth: "0px",
        backgroundColor: theme.palette.common.white,
        "&:hover": {
            color: theme.palette.common.black,
            backgroundColor: theme.palette.common.white,
        }
    },
})

class CardImage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            onActive: false,
        }
    }

    onCardMouseEnter = e => {
        this.setState({
            onActive: true
        })
    }

    onCardMouseLeave = e => {
        this.setState({
            onActive: false
        })
    }

    render = () => (
        <Card className={this.props.classes.card} onMouseEnter={this.onCardMouseEnter} onMouseLeave={this.onCardMouseLeave}>
            {this.state.onActive === true &&
                <CardActions className={this.props.classes.actionsTop}>
                    <Button className={this.props.classes.actionsButton}><FavoriteIcon /></Button>
                    <Button className={this.props.classes.actionsButton}><AddIcon /></Button>
                </CardActions>
            }

            <CardMedia
                classes={{
                    root: this.state.onActive === false ? this.props.classes.cardMedia : this.props.classes.cardMediaActive
                }}
                image={this.props.image.urls.thumb}
            />
        </Card>
    )
}

export default withStyles(CardImageStyles, { theme: true })(CardImage)
