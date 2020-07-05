import React from 'react'
import { connect } from 'react-redux'
import { PhotosDispatch } from '../../../services/store/Photos/PhotosProps'
import DefaultComponent from '../../Extend/Default/DefaultComponent'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
import GetAppIcon from '@material-ui/icons/GetApp';

const PhotoCardStyles = theme => ({
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
        height: 200,
    },
    mediaActive: {
        height: 200,
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

class PhotoCard extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            onActive: false,
        }
    }

    onDownloadClick = e => {
        var data = {
            url: this.props.itemPhoto.urls.full,
            name: this.props.itemPhoto.title,
        }
        this.props.onLoading()
        this.props.downloadImage(data).promise
        .then(res => {
            this.props.offLoading()
        })
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
                image={this.props.itemPhoto.urls.thumb}
            />

            {this.state.onActive === true && (
                <>
                <Typography className={this.props.classes.title}>
                    {this.props.itemPhoto.title}
                </Typography>
                <CardActions className={this.props.classes.actionsBottom}>
                    <Button className={this.props.classes.actionsButton} onClick={this.onDownloadClick}><GetAppIcon /></Button>
                </CardActions>
                </>
            )}
        </Card>
    )
}

export default connect(null, PhotosDispatch)(DefaultComponent(withStyles(PhotoCardStyles, { theme: true })(PhotoCard)))
