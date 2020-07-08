import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { withTranslation } from 'react-i18next'

const CarouselStyles = theme => ({
    root: {},
})

class Carousel extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className={this.props.classes.root}>
        </div>
    )
}

export default withTranslation()(withStyles(CarouselStyles, { theme: true })(Carousel))
