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
        this.props.turnOnLoading()
        this.props.autoCancelRequest(this.props.getImages())
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
