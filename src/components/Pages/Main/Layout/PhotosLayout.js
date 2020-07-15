import React from 'react'
import { Route } from 'react-router-dom'
import Carousel from '../../../Extend/UI/Carousel'
import PhotoSlide from '../../Photo/PhotoSlide'
import PathName from '../../../App/PathName'

class PhotosLayout extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <>
            <Route exact path={PathName.default.any} component={Carousel}></Route>
            <Route exact path={PathName.default.any} component={PhotoSlide}></Route>
        </>
    )
}

export default PhotosLayout
