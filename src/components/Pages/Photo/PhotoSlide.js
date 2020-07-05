import React from 'react'
import { connect } from 'react-redux'
import { PhotosSelector, PhotosDispatch } from '../../../services/store/Photos/PhotosProps'
import DefaultComponent from '../../Extend/Default/DefaultComponent'
import PhotoCard from './PhotoCard'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

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
        this.props.onLoading()
        this.props.autoCancelRequest(this.props.getPhotos(data))
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
            {this.props.photos?.length > 0 &&
                <Grid container spacing={3}>
                    {this.props.photos.map((itemPhoto, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <PhotoCard itemPhoto={itemPhoto}></PhotoCard>
                        </Grid>
                    ))}
                </Grid>
            }
        </div>
    )
}

export default connect(PhotosSelector, PhotosDispatch)(DefaultComponent(withStyles(PhotoSlideStyles, { theme: true })(PhotoSlide)))
