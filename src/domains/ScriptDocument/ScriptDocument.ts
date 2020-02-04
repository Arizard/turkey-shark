export class ScriptDocument {
    public id: string;
    public scriptElements: Array<ScriptElement>;
    public owner: string;
    public name: string;

    constructor(
        id: string,
        scriptElements: Array<ScriptElement>,
        owner: string,
        name: string,
    ) {
        this.id = id;
        this.scriptElements = scriptElements;
        this.owner = owner;
        this.name = name;
    }
}

enum ElementType {
    H1,
    H2,
    Paragraph,
    Outcome,
}

interface ScriptElement {
    elementType: ElementType;
    id: string;
    owner: string;
}

export class H1ScriptElement implements ScriptElement {
    public elementType: ElementType;
    public id: string;
    public owner: string;
    public content: string;

    constructor(
        id: string,
        owner: string,
        content: string
    ) {
        this.elementType = ElementType.H1;
        this.id = id;
        this.owner = owner;
        this.content = content;
    }
}

export class H2ScriptElement implements ScriptElement {
    public elementType: ElementType;
    public id: string;
    public owner: string;
    public content: string;

    constructor(
        id: string,
        owner: string,
        content: string
    ) {
        this.elementType = ElementType.H2;
        this.id = id;
        this.owner = owner;
        this.content = content;
    }
}

export class ParagraphScriptElement implements ScriptElement {
    public elementType: ElementType;
    public id: string;
    public owner: string;
    public content: string;

    constructor(id: string, owner: string, content: string) {
        this.elementType = ElementType.Paragraph;
        this.id = id;
        this.owner = owner;
        this.content = content;
    }
}

export class OutcomeScriptElement implements ScriptElement {
    public elementType: ElementType;
    public id: string;
    public owner: string;

    public counts: string;
    public moveName: string;
    public outcome: string;
    public cues: Array<ScriptCue>;

    constructor(
        id: string,
        owner: string,
        counts: string,
        moveName: string,
        outcome: string,
        cues: Array<ScriptCue>,
    ) {
        this.elementType = ElementType.Outcome;
        this.id = id;
        this.owner = owner;
        this.counts = counts;
        this.moveName = moveName;
        this.outcome = outcome;
        this.cues = cues;
    }

}

export class ScriptCue {
    constructor(id: string, content: string, tag: ScriptTag) {
        this.id = id;
        this.content = content;
        this.tag = tag;
    }
    public id: string;
    public content: string;
    public tag: ScriptTag;
}

export class ScriptTag {
    public id: string;
    public color: string;
    public name: string;

    constructor(id: string, color: string, name: string) {
        this.id = id;
        this.color = color;
        this.name = name;
    }
}

export interface ScriptDocumentRepository {
    get(id: string): Promise<ScriptDocument>;
    put(id: string, doc: ScriptDocument): void;
    create(): Promise<string>;
    find(...args: Array<any>): Promise<Array<ScriptDocument>>;
}

export class ScriptDocumentService {
    private repo: ScriptDocumentRepository;

    constructor(repo: ScriptDocumentRepository) {
        this.repo = repo;
    }

    async newDocument(name: string): Promise<ScriptDocument> {
        const id = await this.repo.create();
        const doc = await this.repo.get(id);
        doc.name = name;
        this.repo.put(id, doc);
        return doc
    }
}
