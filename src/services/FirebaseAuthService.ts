import firebase from "firebase";

class FirebaseAuthService {
    private provider: any;
    private authed: boolean;
    constructor() {
        this.provider = new firebase.auth.GoogleAuthProvider();
        this.authed = false;
    }

    public authenticate(): boolean {
        firebase.auth()
            .signInWithPopup(this.provider)
            .then((userCredential) => {
                console.log(userCredential);
                this.authed = true;
            })
            .catch((error) => {
                console.log(error);
            });

        return true;
    }

    public isAuthed(): boolean {
        return this.authed;
    }
}

export default FirebaseAuthService;
