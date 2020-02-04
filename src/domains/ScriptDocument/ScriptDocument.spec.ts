import {MemoryScriptDocumentRepository} from "./MemoryScriptDocumentRepository";
import {ScriptDocumentService} from "./ScriptDocument";

test('ScriptDocumentService newDocument', async () => {
    return new Promise(
        async (resolve) => {
            const repo = new MemoryScriptDocumentRepository();
            const svc = new ScriptDocumentService(repo);

            const doc = await svc.newDocument("CoolDoc");

            expect(doc.name).toBe('CoolDoc');

            resolve();
        }
    );
});
