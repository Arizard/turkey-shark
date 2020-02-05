import React, {PureComponent} from 'react';
import {ReactAdapter} from "../adapters/ReactAdapter";
import {MemoryScriptDocumentRepository} from "../domains/ScriptDocument/MemoryScriptDocumentRepository";

interface OwnProps {
}

type Props = OwnProps;

type State = Readonly<{}>;

class TestPage extends PureComponent<Props, State> {
    readonly state: State = {};
    private reactAdapter: ReactAdapter;
    constructor(props: Props) {
        super(props);

        const repo = new MemoryScriptDocumentRepository();
        this.reactAdapter = new ReactAdapter(repo);
    }

    render() {
        this.reactAdapter.newScriptDocument("Arie's Doc", (doc) => {
            console.log("Logging from testpage!");
            console.log(doc);

            this.reactAdapter.loadScriptDocument(doc.id, (doc) => {
                console.log("Logging from testpage 2!");
                console.log(doc);
            });
        });
        return (
            <></>
        );
    }
}

export default TestPage;
