import React from 'react'
import { Link } from 'react-router-dom'
import './Topics.css'

class Topics extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            items: [
                {
                    text: "Nature",
                    link: "/t/nature",
                },
                {
                    text: "People",
                    link: "/t/people",
                },
                {
                    text: "Technology",
                    link: "/t/technology",
                },
                {
                    text: "View all",
                    link: "/t",
                },
            ]
        }
    }

    render = () => (
        <div className="topics-panel">
            {this.state.items.map((item, index) => (
                <div key={index} className="topics-item">
                    <Link to={item.link}>{item.text}</Link>
                </div>
            ))}
        </div>
    )
}

export default Topics
