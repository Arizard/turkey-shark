import React from 'react';

import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import Home from "./pages/Home";
import CustomNavbar from "./components/CustomNavbar";
import About from "./pages/About";

import './App.css';
import './blueprint.css';
import './layout.scss';

const App: React.FC = () => {
    return (
        <div className='outer-container'>
            <Router>
                <div className='navbar-container'>
                    <CustomNavbar></CustomNavbar>
                </div>
                <div className='inner-container'>
                    <Switch>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/about'>
                            <About></About>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
