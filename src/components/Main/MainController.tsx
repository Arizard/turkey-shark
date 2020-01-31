import React, {PureComponent} from 'react';
import { FocusStyleManager } from "@blueprintjs/core";

import MainPresenter from "./MainPresenter";
import firebase from "firebase";

FocusStyleManager.onlyShowFocusOnTabs();

interface userDetails {
    username: string,
    email: string,
    accessToken: string,
}

interface OwnProps {
}

type State = Readonly<{
    authed: boolean,
    user: any,
    token: string,
    authLoading: boolean,
}>;

type Props = OwnProps;

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

class MainController extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            authLoading: true,
            authed: false,
            user: null,
            token: '',
        };

        console.log("MainController Constructor")
    }

    componentDidMount(): void {
        this.authHandler()
    }

    public authHandler = () => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                const currentUser = {
                    displayName: user.displayName
                };
                this.setState({user: currentUser, authed: true});
                localStorage.setItem('user', user.uid);
                user.getIdToken(true).then((idToken) => {
                    console.log(idToken);
                    this.setState({token: idToken})
                }).catch(function (error) {
                    console.error("Could not get the ID Token.");
                    console.error(error)
                });
            } else {
                this.setState({user: null, authed: false});
                localStorage.removeItem('user');
            }
            this.setState({authLoading: false})
        })
    };
    public updateAuthState = (newState: boolean) => {
        this.setState((prevState) => {
            return {authed: newState};
        });
    };
    public startAuth = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    public logOut = () => {
        firebase.auth().signOut().then(() => {
            this.updateAuthState(false)
        }).catch(function (error) {
        });
    };

    render() {
        return (
            <MainPresenter
                authLoading={this.state.authLoading}
                startAuth={this.startAuth}
                logOut={this.logOut}
                user={this.state.user}
                authed={this.state.authed}/>
        );
    }
}

export default MainController;
