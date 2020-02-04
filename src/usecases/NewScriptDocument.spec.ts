import {NewScriptDocumentInput, NewScriptDocumentUseCase} from "./NewScriptDocument";
import {UseCaseCallback} from "./UseCase";
import {MemoryScriptDocumentRepository} from "../domains/ScriptDocument/MemoryScriptDocumentRepository";
import {ScriptDocument} from "../domains/ScriptDocument/ScriptDocument";

it("creates a new document using the use case",
    async () => {
        expect.assertions(2);

        return new Promise(
            (resolve, reject) => {

                const repo = new MemoryScriptDocumentRepository();
                const resultHandler: UseCaseCallback = (output) => {
                    try {
                        output.getResult().then((doc: ScriptDocument) => {
                            expect(doc).toBeInstanceOf(ScriptDocument);
                            expect(doc.name).toBe("arie's doc");

                            resolve();
                        })
                    }
                    catch (e) {
                        reject(e);
                    }
                };
                const input = new NewScriptDocumentInput(repo, "arie's doc", resultHandler);
                const uc = new NewScriptDocumentUseCase(input);

                uc.execute();
            }
        );
    }
);
