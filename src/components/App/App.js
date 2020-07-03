import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../User/Login'
import ForgotPassword from '../User/ForgotPassword'
import Register from '../User/Register'
import Account from '../User/Account'
import Header from '../Pages/Redirect/Header'
import Home from '../Pages/Home/Home'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Store, Persistor } from '../../services/store/Storage'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import '../../libraryConfig/Axios'
import '../../libraryConfig/i18n'
import './App.css'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className="App">
            <I18nextProvider i18n={i18next}>
            <Provider store={Store}>
                <PersistGate persistor={Persistor} loading={null}>
                    <BrowserRouter>
                        <Header></Header>
                        <Switch>
                            <Route exact path="/forgot_password" component={ForgotPassword}></Route>
                            <Route exact path="/login" component={Login}></Route>
                            <Route exact path="/join" component={Register}></Route>
                            <Route exact path="/account" component={Account}></Route>
                            {/* <Route exact path="/s/:search" component={Home}></Route> */}
                            <Route path="/*" component={Home}></Route>
                        </Switch>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
            </I18nextProvider>
        </div>
    )
}

export default App
