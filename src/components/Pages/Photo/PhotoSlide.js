import React from 'react'
import { connect } from 'react-redux'
import { PhotosSelector, PhotosDispatch } from '../../../services/store/Photos/PhotosMapping'
import AuthComponent from '../../Extend/Default/AuthComponent'
import PhotoCard from './PhotoCard'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const PhotoSlideStyles = theme => ({
    root: {},
})

class PhotoSlide extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.loadPhotos()
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.loadPhotos()
        }
    }

    loadPhotos = () => {
        var data = {
            path: this.props.match.url
        }
        this.props.autoCancelRequest(this.props.getPhotos(data))
        .catch(err => {
            if (err.reason === 'unmounted') {
                console.log("Component has unmounted")
            } else {
            }
        })
    }

    render = () => (
        <div className={this.props.classes.root}>
            <Typography variant="h6">Topic Slide</Typography>
            {this.props.photos.length > 0 &&
                <Grid container spacing={3}>
                    {this.props.photos.map((photo, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <PhotoCard photo={photo}></PhotoCard>
                        </Grid>
                    ))}
                </Grid>
            }
        </div>
    )
}

export default connect(PhotosSelector, PhotosDispatch)(AuthComponent(withStyles(PhotoSlideStyles, { theme: true })(PhotoSlide)))
