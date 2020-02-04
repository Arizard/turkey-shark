import {MemoryScriptDocumentRepository} from "./MemoryScriptDocumentRepository";
import {ScriptDocument, ScriptDocumentService} from "./ScriptDocument";

test('ScriptDocumentService newDocument', async () => {
    const prom = new Promise(
        async (resolve, reject) => {
            const repo = new MemoryScriptDocumentRepository();
            const svc = new ScriptDocumentService(repo);

            const doc = await svc.newDocument("CoolDoc");

            expect(doc.name).toBe('CoolDoc');

            resolve();
        }
    );
    return prom;
});
