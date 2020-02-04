import {
    ScriptDocumentService,
    ScriptDocumentRepository,
    ScriptDocument,
} from "../domains/ScriptDocument/ScriptDocument";

import {UseCase, UseCaseCallback, UseCaseInput, UseCaseOutput} from "./UseCase";

export class NewScriptDocumentInput implements UseCaseInput {
    public repo: ScriptDocumentRepository;
    public name: string;
    public onResult: UseCaseCallback;

    constructor(repo: ScriptDocumentRepository, name: string, onResult: UseCaseCallback) {
        this.name = name;
        this.repo = repo;
        this.onResult = onResult;
    }
}

export class NewScriptDocumentUseCase implements UseCase {
    private name: string;
    private repo: ScriptDocumentRepository;
    public onResult: UseCaseCallback;

    constructor(input: NewScriptDocumentInput) {
        this.name = input.name;
        this.repo = input.repo;
        this.onResult = input.onResult;
    }

    execute(): void {
        const svc = new ScriptDocumentService(this.repo);
        const docPromise = svc.newDocument(this.name);
        const output = new UseCaseOutput(docPromise, null);
        this.onResult(output);
    }

}
