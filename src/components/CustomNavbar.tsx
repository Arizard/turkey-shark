import * as React from 'react'
import {
    Alignment,
    AnchorButton,
    Classes,
    Navbar,
    NavbarGroup,
    NavbarHeading,
} from '@blueprintjs/core';

const CustomNavbar = () => {
    return (
        <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading>Turkey Shark</NavbarHeading>
                <AnchorButton
                    href='/'
                    className={Classes.MINIMAL}
                    icon='home'
                    text='Home'/>
                <AnchorButton
                    href='/about'
                    className={Classes.MINIMAL}
                    icon='info-sign'
                    text='About'/>
            </NavbarGroup>
        </Navbar>
    );
}

export default CustomNavbar;
