import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Store, Persistor } from '../../services/store/Storage'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import { ThemeProvider } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import ExtendTheme from '../../libraryConfig/theme/ExtendTheme'
import Sidebar from '../Pages/Redirect/Sidebar'
import Message from '../Extend/Message/Message'
import Notify from "../Extend/Message/Notify"
import Header from '../Pages/Redirect/Header'
import HomeRouter from '../Pages/Main/HomeRouter'
import UserRouter from '../Pages/Main/UserRouter'
import PathName from './PathName'
import '../../libraryConfig/Axios'
import '../../libraryConfig/i18n'

const AppStyles = theme => ({
    root: {},
    topPanel: {
        position: "sticky",
        top: "0px",
        zIndex: theme.zIndex.appBar,
    },
    mainPanel: {},
})

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <ThemeProvider theme={ExtendTheme}>
            <div className={this.props.classes.root}>
                <I18nextProvider i18n={i18next}>
                <Provider store={Store}>
                    <PersistGate persistor={Persistor} loading={null}>
                        <BrowserRouter>
                            <div className={this.props.classes.topPanel}>
                                <Sidebar />
                                <Message />
                                <Notify />
                                <Header />
                            </div>
                            <div className={this.props.classes.mainPanel}>
                                <Switch>
                                    {/* <Route exact path="/s/:search" component={Home}></Route> */}
                                    <Route exact path={PathName.user.root} component={UserRouter}></Route>
                                    <Route path={PathName.user.any} component={UserRouter}></Route>
                                    <Route path={PathName.default.any} component={HomeRouter}></Route>
                                </Switch>
                            </div>
                        </BrowserRouter>
                    </PersistGate>
                </Provider>
                </I18nextProvider>
            </div>
        </ThemeProvider>
    )
}

export default withStyles(AppStyles, { theme: true })(App)
