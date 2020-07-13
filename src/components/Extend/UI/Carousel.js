import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withTranslation } from 'react-i18next'

const CarouselStyles = theme => ({
    root: {
        position: "relative",
        width: "100%",
        height: "300px",
    },
    image: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ccc",
        zIndex: "-1",
    },
    content: {
        position: "absolute",
        left: "0px",
        top: "0px",
        paddingTop: "50px",
        paddingLeft: "15%",
    },
    info: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
    },
})

class Carousel extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className={this.props.classes.root}>
            <div className={this.props.classes.image}>
            </div>
            <div className={this.props.classes.content}>
                <h2>Unsplash</h2>
                <div>The internet's source of freely-usable images.</div>
                <div>Powered by creators everywhere.</div>
                <div><input></input></div>
                <div>Trending: flower, wallpapers, backgrounds, happy, love</div>
            </div>
            <div className={this.props.classes.info}>
                Photo of the Day by Steve Johnson
            </div>
        </div>
    )
}

export default withTranslation()(withStyles(CarouselStyles, { theme: true })(Carousel))
