import React from 'react'
import { connect } from 'react-redux'
import { TopicsSelector, TopicsDispatch } from '../../../services/store/Topics/TopicsProps'
import { Link as RouterLink } from 'react-router-dom'

import DefaultComponent from '../../Extend/Default/DefaultComponent'
import { withStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'

const TopicStyles = theme => ({
    root: {
        height: theme.spacing(8),
        display: 'flex',
        alignItems: 'center',
    },
    topics: {
        display: 'flex',
        flexGrow: 1,
        '& > *:not(:last-child)': {
            marginRight: theme.spacing(2)
        }
    },
    viewAll: {

    },
    link: {
        color: 'inherit',
        textTransform: 'capitalize',
    },
})

class Topics extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            viewAll: {
                text: "View all",
                link: "/t"
            }
        }
    }

    componentDidMount() {
        this.loadTopicsList()
    }

    loadTopicsList = () => {
        this.props.autoCancelRequest(this.props.getTopicList())
        .catch(err => {
            if (err.reason === 'unmounted') {
                console.log("Component has unmounted")
            } else {
            }
        })
    }

    render = () => (
        <div className={this.props.classes.root}>
            <div className={this.props.classes.topics}>
                {this.props.topicsList.map((item, index) => (
                    <Link key={index} className={this.props.classes.link}
                        component={RouterLink} to={item.link}>{item.text}</Link>
                ))}
            </div>
            <div className={this.props.classes.viewAll}>
                <Link className={this.props.classes.link} component={RouterLink}
                    to={this.state.viewAll.link}>{this.state.viewAll.text}</Link>
            </div>
        </div>
    )
}

export default connect(TopicsSelector, TopicsDispatch)(DefaultComponent(withStyles(TopicStyles, { theme: true })(Topics)))
