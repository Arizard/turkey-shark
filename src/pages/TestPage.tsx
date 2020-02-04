import React, {PureComponent} from 'react';

interface OwnProps {
    persistenceService: any;
}

type Props = OwnProps;

type State = Readonly<{}>;

class TestPage extends PureComponent<Props, State> {
    readonly state: State = {};

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <></>
        );
    }
}

export default TestPage;
