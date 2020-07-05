import React from 'react'
import { Route } from 'react-router-dom'
import PhotoSlide from '../../Photo/PhotoSlide'

class PhotosLayout extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div>
            <Route exact path="/*" component={PhotoSlide}></Route>
        </div>
    )
}

export default PhotosLayout
