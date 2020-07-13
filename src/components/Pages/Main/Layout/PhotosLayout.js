import React from 'react'
import { Route } from 'react-router-dom'
import Carousel from '../../../Extend/UI/Carousel'
import PhotoSlide from '../../Photo/PhotoSlide'

class PhotosLayout extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <>
            <Route exact path="/*" component={Carousel}></Route>
            <Route exact path="/*" component={PhotoSlide}></Route>
        </>
    )
}

export default PhotosLayout
