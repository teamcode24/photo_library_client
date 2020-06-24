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
        <div className="Home-panel">
            <div className="Home-title">
                <h2>Trending Now</h2>
            </div>
            <div className="Home-content">
                {this.props.images.map((image, index) => (
                    <div key={index}>
                        <div>{image.title}</div>
                        <img src={image.urls.thumb} alt={image.title}></img>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default connect(ImagesSelector, ImagesDispatch)(DefaultComponent(Home))
