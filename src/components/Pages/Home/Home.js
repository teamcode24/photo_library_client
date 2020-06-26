import React from 'react'
import { connect } from 'react-redux'
import { ImagesSelector, ImagesDispatch } from '../../../services/store/Images/ImagesMapping'
import AuthComponent from '../../Extend/Default/AuthComponent'
import Topics from '../Redirect/Topics/Topics'
import CardImage from '../CardImage/CardImage'
import Footer from '../Redirect/Footer/Footer'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const HomeStyles = theme => ({
    root: {
        padding: theme.spacing(0, 3),
    },
})

class Home extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.loadImages()
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.loadImages()
        }
    }

    loadImages = () => {
        var data = {
            path: this.props.match.url
        }
        this.props.autoCancelRequest(this.props.getImages(data))
        .catch(err => {
            if (err.reason === 'unmounted') {
                console.log("Component has unmounted")
            } else {
            }
        })
    }

    render = () => (
        <div className={this.props.classes.root}>
            <Topics></Topics>
            <Typography variant="h6">Trending Now</Typography>
            <Grid container spacing={3}>
                {this.props.images.map((image, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <CardImage image={image}></CardImage>
                    </Grid>
                ))}
            </Grid>
            <Footer></Footer>
        </div>
    )
}

export default connect(ImagesSelector, ImagesDispatch)(AuthComponent(withStyles(HomeStyles, { theme: true })(Home)))
