import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TopicSlide from '../../Topics/TopicSlide'
import TopicInfo from '../../Topics/TopicInfo'
import PhotoSlide from '../../Photo/PhotoSlide'

class Topics extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <>
        <Route exact path="/t" component={TopicSlide}></Route>
        <Route exact path="/t/*" component={TopicInfo}></Route>
        <Route exact path="/t/*" component={PhotoSlide}></Route>
        <div>Topic layout 1</div>
        </>
    )
}

export default Topics
