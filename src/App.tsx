import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    useLocation
} from 'react-router-dom';
import Home from "./pages/Home";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import About from "./pages/About";
import Login from './pages/Login';

import './App.css';
import './blueprint.css';
import './layout.scss';
import FirebaseAuthService from "./services/FirebaseAuthService";
import AuthService from "./services/AuthService";

class appGlobal {
    public authService: AuthService

    constructor(authService: AuthService) {
        this.authService = authService
    }

    public isAuthed() {
        return false
    }
}

const authService = new FirebaseAuthService();

const concreteAppGlobal = new appGlobal(authService);

const App: React.FC = () => {
    return (
        <div className='outer-container'>
            <Router>
                <div className='navbar-container'>
                    <CustomNavbar appGlobal={concreteAppGlobal}></CustomNavbar>
                </div>
                <div className='inner-container'>
                    <Switch>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/about'>
                            <About></About>
                        </Route>
                        <Route exact path='/login'>
                            <LoginWithRedirect/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;

const LoginWithRedirect = () => {
    let location = useLocation();
    if (concreteAppGlobal.isAuthed()) {
        return (<Redirect to={{pathname: '/', state: {from: location}}}/>);
    }
    return (<Login appGlobal={concreteAppGlobal}></Login>);
}
