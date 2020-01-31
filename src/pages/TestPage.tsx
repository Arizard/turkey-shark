import React, {PureComponent} from 'react';
import PersistenceService from "../services/PersistenceService";
import ScriptDocument from "../types";

interface OwnProps {
    persistenceService: PersistenceService
}

type Props = OwnProps;

type State = Readonly<{}>;

class TestPage extends PureComponent<Props, State> {
    readonly state: State = {};

    constructor(props: Props) {
        super(props);
        const db = props.persistenceService

        db.getDocument(
            "IUMUVFCwyrz8RXV2K2xa",
            (doc: ScriptDocument) => {
                console.log(doc);
            },
            (error: any) => {
                console.error(error);
            }
        )
    }

    render() {
        return (
            <></>
        );
    }
}

export default TestPage;
