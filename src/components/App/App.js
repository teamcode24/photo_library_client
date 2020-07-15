import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Message from '../Extend/Message/Message'
import Notify from '../Extend/Message/Notify'
import Header from '../Pages/Redirect/Header'
import HomeRouter from '../Pages/Main/HomeRouter'
import UserRouter from '../Pages/Main/UserRouter'
import PathName from './PathName'
import GlobalDispatch from '../../services/store/GlobalDispatch'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Store, Persistor } from '../../services/store/Storage'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import '../../libraryConfig/Axios'
import '../../libraryConfig/i18n'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        GlobalDispatch.notify.show({
            content: "example app notify 1",
        })
    }

    render = () => (
        <div className="App">
            <I18nextProvider i18n={i18next}>
            <Provider store={Store}>
                <PersistGate persistor={Persistor} loading={null}>
                    <BrowserRouter>
                        <Message></Message>
                        <Notify></Notify>
                        <Header></Header>
                        <Switch>
                            {/* <Route exact path="/s/:search" component={Home}></Route> */}
                            <Route exact path={PathName.user.root} component={UserRouter}></Route>
                            <Route path={PathName.user.any} component={UserRouter}></Route>
                            <Route path={PathName.default.any} component={HomeRouter}></Route>
                        </Switch>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
            </I18nextProvider>
        </div>
    )
}

export default App
