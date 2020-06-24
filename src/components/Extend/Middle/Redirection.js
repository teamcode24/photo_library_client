import React from 'react'
import { Redirect } from 'react-router-dom'

const Redirection = ChildComponent => {
    class RedirectComponent extends React.Component {
        constructor (props) {
            super(props)
            this.state = {
                redirectInfo: {
                    auto: false,
                    path: '',
                    search: '',
                    state: {}
                },
            }
        }

        redirect = (path, search, state) => {
            this.setState({
                redirectInfo: {
                    auto: true,
                    path: path,
                    search: search,
                    state: state
                },
            })
        }

        render() {
            if (this.state.redirectInfo.auto === true) {
                return <Redirect
                    to={{
                        pathname: this.state.path,
                        search: this.state.search,
                        state: this.state.state
                    }}
                ></Redirect>
            }
            return <ChildComponent {...this.props}
                redirect={this.redirect}
            />
        }
    }
    return RedirectComponent
}

export default Redirection
