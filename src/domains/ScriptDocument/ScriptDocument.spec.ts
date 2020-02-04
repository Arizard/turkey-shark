import {MemoryScriptDocumentRepository} from "./MemoryScriptDocumentRepository";
import {ScriptDocument, ScriptDocumentService} from "./ScriptDocument";

it('Test ScriptDocumentService newDocument', async () => {
    const repo = new MemoryScriptDocumentRepository();
    const svc = new ScriptDocumentService(repo, "jest");

    const doc = await svc.newDocument("CoolDoc");

    expect(doc.name).toBe('CoolDoc');
});
