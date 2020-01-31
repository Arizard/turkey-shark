import ScriptDocument from "../types";

export default interface PersistenceService {
    setUser: { (token: string): void }

    listDocuments: { (onSuccess: any, onFail: any): void }
    getDocument: { (id: string, onSuccess: any, onFail: any): void }
    putDocument: { (id: string, doc: ScriptDocument): void }

    getElement: { (id: string, onSuccess: any, onFail: any): void }
    putElement: { (id: string, el: object): void }

    getCue: { (id: string, onSuccess: any, onFail: any): Promise<any> }
    putCue: { (id: string, cue: object): void }

    getTag: { (id: string, onSuccess: any, onFail: any): void }
    putTag: { (id: string, tag: object): void }
}
