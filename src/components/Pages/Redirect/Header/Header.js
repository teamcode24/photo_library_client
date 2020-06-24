import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className="header-panel">
            <Link to="/t" className="header-item">
                <div>Topics</div>
            </Link>
            <Link to="/login" className="header-item">
                <div>Login</div>
            </Link>
            <Link to="/join" className="header-item">
                <button>Join free</button>
            </Link>
        </div>
    )
}

export default Header
