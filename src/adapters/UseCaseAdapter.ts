import {
    ScriptDocument,
    ScriptDocumentRepository
} from "../domains/ScriptDocument/ScriptDocument";
import {UseCaseCallback, UseCaseOutput} from "../usecases/UseCase";

export interface UseCaseAdapter {
    newScriptDocument(name: string, callback: {(doc: ScriptDocument): void}): void
}
