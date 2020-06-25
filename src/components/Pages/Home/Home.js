import React from 'react'
import { connect } from 'react-redux'
import { ImagesSelector, ImagesDispatch } from '../../../services/store/Images/ImagesMapping'
import DefaultComponent from '../../Extend/Default/DefaultComponent'
import Topics from '../Redirect/Topics/Topics'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'

const HomeStyles = theme => ({
    root: {
        maxWidth: 350,
    },
    card: {
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
            {/* <div className="Home-content"> */}
                {this.props.images.map((image, index) => (
                    <Card key={index} className={this.props.classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={this.props.classes.cardImage}
                                component="img"
                                height="200"
                                image={image.urls.thumb}
                                title={image.title}
                            />
                        </CardActionArea>
                    </Card>
                    // <div key={index}>
                    //     <div>{image.title}</div>
                    //     <img src={image.urls.thumb} alt={image.title}></img>
                    // </div>
                ))}
            {/* </div> */}
        </div>
    )
}

export default connect(ImagesSelector, ImagesDispatch)(DefaultComponent(withStyles(HomeStyles, { theme: true })(Home)))
