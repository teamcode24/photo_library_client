import React from 'react'
import { connect } from 'react-redux'
import { CardImageDispatch } from '../../../services/store/CardImage/CardImageMapping'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
import GetAppIcon from '@material-ui/icons/GetApp';

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
    actionsBottom: {
        position: "absolute",
        bottom: "0px",
        right: "0px",
        zIndex: "1000",
    },
    media: {
        height: "200px",
    },
    mediaActive: {
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
    title: {
        position: "absolute",
        bottom: "0px",
        left: "0px",
        zIndex: "1000",
        color: theme.palette.common.white,
        padding: theme.spacing(1),
        userSelect: "none",
        cursor: "pointer",
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

    onDownloadClick = e => {
        var data = {
            url: this.props.image.urls.full,
            name: this.props.image.title,
        }
        this.props.downloadImage(data)
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
                    root: this.state.onActive === false ? this.props.classes.media : this.props.classes.mediaActive
                }}
                image={this.props.image.urls.thumb}
            />

            {this.state.onActive === true &&
                <Typography className={this.props.classes.title}>
                    {this.props.image.title}
                </Typography>
            }

            {this.state.onActive === true &&
                <CardActions className={this.props.classes.actionsBottom}>
                    <Button className={this.props.classes.actionsButton}><GetAppIcon onClick={this.onDownloadClick} /></Button>
                </CardActions>
            }

        </Card>
    )
}

export default connect(null, CardImageDispatch)(withStyles(CardImageStyles, { theme: true })(CardImage))
