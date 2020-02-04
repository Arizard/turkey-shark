import React, {FunctionComponent} from 'react';
import {
    BrowserRouter as Router, Redirect,
    Route,
    Switch,
    useLocation
} from "react-router-dom";
import CustomNavbar from "../CustomNavbar/CustomNavbar";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Login from "../../pages/Login";
import {Classes} from "@blueprintjs/core";
import TestPage from "../../pages/TestPage";

interface OwnProps {
    authLoading: boolean;
    startAuth: any;
    authed: boolean;
    user: any;
    logOut: any;
}

type Props = OwnProps;

const MainPresenter: FunctionComponent<Props> = (props) => {

    return (
        <div className='outer-container'>
            <Router>
                <div className='navbar-container'>
                    <CustomNavbar
                        authed={props.authed}
                        logOut={props.logOut}
                        user={props.user}/>
                </div>
                <div
                    className={`inner-container ${props.authLoading ? Classes.SKELETON : ''}`}>
                    <Switch>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route exact path='/about'>
                            <About></About>
                        </Route>
                        <Route exact path='/login'>
                            <LoginWithRedirect {...props}/>
                        </Route>
                        <Route exact path='/testpage'>
                        </Route>
                    </Switch>
                </div>
                <div className={'footer-container'}>
                    <div className={'horizontal-line-medium'}></div>
                    <span className={Classes.TEXT_MUTED}>
                        Arie Oldman, 2020
                    </span>
                </div>
            </Router>
        </div>
    );
};

const LoginWithRedirect = (props: any) => {
    const location = useLocation();
    const authed = props.authed;
    if (authed) {
        return (<Redirect to={{pathname: '/', state: {from: location}}}/>);
    }
    return (<Login startAuth={props.startAuth}></Login>);
}

export default MainPresenter;

