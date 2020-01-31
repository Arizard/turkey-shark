import PersistenceService from "./PersistenceService";
import ScriptDocument from "../types";

export default class FirebasePersistenceService implements PersistenceService {
    private db: any;
    private token: any;
    constructor (db: any) {
        this.db = db
    }

    public setUser(token: string) {
        this.token = token;
    }

    public listDocuments(onSuccess: any, onFail: any) {

    }

    public getDocument(id: string, onSuccess: any, onFail: any) {
        console.log(`getting document ${id} `)
        let docRef = this.db.collection('script-documents').doc(id)
        docRef.get().then(
            (doc: any) => {
                if (doc.exists) {
                    onSuccess(doc.data());
                } else {
                    onFail('Does Not Exist');
                }
            }
        )
        .catch((error: any) => {
            onFail(error);
        })
    }

    public putDocument(id: string, doc: ScriptDocument) {

    }

    public getElement(id: string, onSuccess: any, onFail: any) {

    }

    public putElement(id: string, el: object) {

    }

    public getCue(id: string, onSuccess: any, onFail: any) {

    }

    public putCue(id: string, cue: object) {

    }

    public getTag(id: string, onSuccess: any, onFail: any) {

    }

    public putTag(id: string, tag: object) {

    }
}
