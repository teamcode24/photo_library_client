import React from 'react'
import { connect } from 'react-redux'
import { ImagesSelector, ImagesDispatch } from '../../../services/store/Images/ImagesMapping'
import DefaultComponent from '../../Extend/Default/DefaultComponent'
import './Home.css'

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
        this.props.turnOnLoading()
        console.log('match is', this.props.match)
        var data = {
            path: this.props.match.url
        }
        this.props.autoCancelRequest(this.props.getImages(data))
        .then(res => this.props.turnOnLoading())
        .catch(err => {
            if (err.reason === 'unmounted') {
                console.log("Component has unmounted")
            } else {
                this.props.turnOffLoading()
            }
        })
    }

    render = () => (
        <div className="Home-panel">
            <div className="Home-title">
                <h2>Trending Now</h2>
            </div>
            <div className="Home-content">
            </div>
        </div>
    )
}

export default connect(ImagesSelector, ImagesDispatch)(DefaultComponent(Home))
