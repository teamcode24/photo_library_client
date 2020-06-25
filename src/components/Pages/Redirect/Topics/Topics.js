import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'

const TopicStyles = theme => ({
    root: {
        height: theme.spacing(8),
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 3),
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
    },
})

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
            ],
            viewAll: {
                text: "View all",
                link: "/t",
            },
        }
    }

    render = () => (
        <div className={this.props.classes.root}>
            <div className={this.props.classes.topics}>
                {this.state.items.map((item, index) => (
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

export default withStyles(TopicStyles, { theme: true })(Topics)
