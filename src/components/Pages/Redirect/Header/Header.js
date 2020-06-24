import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className="header-panel">
            <Link to="/t">
                <div>Topics</div>
            </Link>
            <Link to="/login">
                <div>Login</div>
            </Link>
            <Link to="/join">
                <button>Join free</button>
            </Link>
        </div>
    )
}

export default Header
