import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../User/Login/Login'
import ForgotPassword from '../User/ForgotPassword/ForgotPassword'
import Register from '../User/Register/Register'
import Header from '../Pages/Redirect/Header/Header'
import Home from '../Pages/Home/Home'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Store, Persistor } from '../../services/store/Storage'
import '../../libraryConfig/Axios'
import './App.css'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className="App">
            <Provider store={Store}>
                <PersistGate persistor={Persistor} loading={null}>
                    <BrowserRouter>
                        <Header></Header>
                        <Switch>
                            <Route exact path="/forgot_password" component={ForgotPassword}></Route>
                            <Route exact path="/login" component={Login}></Route>
                            <Route exact path="/join" component={Register}></Route>
                            {/* <Route exact path="/t/:topic" component={Home}></Route> */}
                            {/* <Route exact path="/s/:search" component={Home}></Route> */}
                            <Route path="/*" component={Home}></Route>
                        </Switch>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </div>
    )
}

export default App
