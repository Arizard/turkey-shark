import * as React from 'react'

import './SampleWideBlock.scss'
import {Card, H5} from "@blueprintjs/core";

const SampleWideBlock = () => {
    return (
        <div className='wider-content'>
            <Card interactive={true}>
                <H5>Wide Content Card</H5>
                <p>Some wide content stuff.</p>
            </Card>
        </div>
    );
}

export default SampleWideBlock;
