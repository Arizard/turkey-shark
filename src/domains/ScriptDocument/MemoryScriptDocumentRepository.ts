import {ScriptDocumentRepository, ScriptDocument, H1ScriptElement} from "./ScriptDocument";

const uuid = require('uuid/v4');

export class MemoryScriptDocumentRepository implements ScriptDocumentRepository {
    private memory: {[key: string]: ScriptDocument};
    private owner: string;

    constructor() {
        this.memory = {};
        this.owner = 'memory';
    }

    create(): Promise<string> {
        return new Promise<string>(
            (resolve, reject) => {
                const id: string = uuid();
                this.memory[id] = new ScriptDocument(
                    id,
                    [
                        new H1ScriptElement(
                            uuid(),
                            this.owner,
                            "New Heading",
                        )
                    ],
                    this.owner,
                    "New Document",
                );
                resolve(id);
            },
        );
    }

    find(...args: Array<any>): Promise<Array<ScriptDocument>> {
        return new Promise<Array<ScriptDocument>>(
            (resolve, reject) => {
                const results: Array<ScriptDocument> = [];
                for (let k in this.memory) {
                    results.push(this.memory[k])
                }
                return results
            }
        );
    }

    get(id: string): Promise<ScriptDocument> {
        return new Promise<ScriptDocument>(
            (resolve, reject) => {
                const result: ScriptDocument | undefined = this.memory[id];
                if (result == undefined) {
                    reject("does not exist");
                    return;
                }
                resolve(result);
            }
        );
    }

    put(id: string, doc: ScriptDocument): void {
        this.memory[id] = doc;
    }
}
