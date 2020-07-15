import React from 'react'
import { Route } from 'react-router-dom'
import TopicSlide from '../../Topics/TopicSlide'
import TopicInfo from '../../Topics/TopicInfo'
import PhotoSlide from '../../Photo/PhotoSlide'
import PathName from '../../../App/PathName'

class TopicsLayout extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <>
            <Route exact path={PathName.topic.root} component={TopicSlide}></Route>
            <Route exact path={PathName.topic.any} component={TopicInfo}></Route>
            <Route exact path={PathName.topic.any} component={PhotoSlide}></Route>
        </>
    )
}

export default TopicsLayout
