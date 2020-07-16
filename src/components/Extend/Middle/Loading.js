import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { fade, withStyles } from '@material-ui/core/styles'

const LoadingStyles = theme => ({
    root: {
        position: "relative",
    },
    loadingContainer: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        backgroundColor: fade(theme.palette.common.white, 0.5),
        zIndex: theme.zIndex.main,
    },
    loading: {
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: "-20px",
        marginTop: "-20px",
        zIndex: theme.zIndex.main,
    },
})

const Loading = ChildComponent => {
    class LoadingComponent extends React.Component {
        constructor (props) {
            super(props)
            this.state = {
                isLoading: false
            }
        }

        onLoading = () => { this.setState({ isLoading: true }) }
        offLoading = () => { this.setState({ isLoading: false }) }
        
        render () {
            const {classes, ...otherProps} = this.props
            return (
                <div className={classes.root}>
                    {this.state.isLoading &&
                        <div className={classes.loadingContainer}>
                            <CircularProgress className={classes.loading}></CircularProgress>
                        </div>
                    }
                    <ChildComponent {...otherProps}
                        onLoading={this.onLoading}
                        offLoading={this.offLoading}
                    />
                </div>
            )
        }
    }
    return withStyles(LoadingStyles, { theme: true })(LoadingComponent)
}

export default Loading
