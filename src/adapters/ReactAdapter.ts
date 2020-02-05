import {UseCaseAdapter} from "./UseCaseAdapter";
import {
    ScriptDocument,
    ScriptDocumentRepository
} from "../domains/ScriptDocument/ScriptDocument";
import {UseCaseCallback} from "../usecases/UseCase";
import {
    NewScriptDocumentInput,
    NewScriptDocumentUseCase
} from "../usecases/NewScriptDocument";
import {
    LoadScriptDocumentInput,
    LoadScriptDocumentUseCase
} from "../usecases/LoadScriptDocument";

export class ReactAdapter implements UseCaseAdapter {
    private repo: ScriptDocumentRepository;

    constructor(repo: ScriptDocumentRepository) {
        this.repo = repo;
    }

    newScriptDocument(name: string, callback: { (doc: ScriptDocument): void }): void {
        const resultHandler: UseCaseCallback = (output) => {
            output.getResult().then(callback)
        };
        const input = new NewScriptDocumentInput(this.repo, name, resultHandler);
        const uc = new NewScriptDocumentUseCase(input);

        uc.execute();
    }

    loadScriptDocument(id: string, callback: { (doc: ScriptDocument): void }): void {
        const resultHandler: UseCaseCallback = (output) => {
            output.getResult().then(callback)
        };
        const input = new LoadScriptDocumentInput(this.repo, id, resultHandler);
        const uc = new LoadScriptDocumentUseCase(input);

        uc.execute();
    }

}
