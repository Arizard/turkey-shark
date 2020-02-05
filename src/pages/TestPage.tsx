import React, {PureComponent} from 'react';
import {ReactAdapter} from "../adapters/ReactAdapter";
import {MemoryScriptDocumentRepository} from "../domains/ScriptDocument/MemoryScriptDocumentRepository";
import {ScriptDocument} from "../domains/ScriptDocument/ScriptDocument";
import {H1} from "@blueprintjs/core";

interface OwnProps {
}

type Props = OwnProps;

type State = Readonly<{
    doc: ScriptDocument | null
}>;

class TestPage extends PureComponent<Props, State> {
    readonly state: State = {
        doc: null,
    };
    private reactAdapter: ReactAdapter;
    constructor(props: Props) {
        super(props);

        const repo = new MemoryScriptDocumentRepository();
        this.reactAdapter = new ReactAdapter(repo);
    }

    componentDidMount(): void {
        this.reactAdapter.newScriptDocument("Arie's Doc", (doc) => {
            console.log("Logging from testpage!");
            console.log(doc);

            this.reactAdapter.loadScriptDocument(doc.id, (doc) => {
                console.log("Logging from testpage 2!");
                console.log(doc);

                this.setState({
                    doc: doc,
                })
            });
        });
    }

    render() {
        if (this.state.doc != null) {
            return (
                <div>
                    <H1>{this.state.doc.name}</H1>
                </div>
            );
        }
        return (<></>);
    }
}

export default TestPage;
