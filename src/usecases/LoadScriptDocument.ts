import {
    ScriptDocumentService,
    ScriptDocumentRepository,
    ScriptDocument,
} from "../domains/ScriptDocument/ScriptDocument";

import {UseCase, UseCaseCallback, UseCaseInput, UseCaseOutput} from "./UseCase";

export class LoadScriptDocumentInput implements UseCaseInput {
    public repo: ScriptDocumentRepository;
    public id: string;
    public onResult: UseCaseCallback;

    constructor(repo: ScriptDocumentRepository, id: string, onResult: UseCaseCallback) {
        this.id = id;
        this.repo = repo;
        this.onResult = onResult;
    }
}

export class LoadScriptDocumentUseCase implements UseCase {
    private id: string;
    private repo: ScriptDocumentRepository;
    public onResult: UseCaseCallback;

    constructor(input: LoadScriptDocumentInput) {
        this.id = input.id;
        this.repo = input.repo;
        this.onResult = input.onResult;
    }

    execute(): void {
        const docPromise = this.repo.get(this.id);
        const output = new UseCaseOutput(docPromise, null);
        this.onResult(output);
    }

}
