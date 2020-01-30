import * as React from 'react'
import {
    Alignment,
    AnchorButton,
    Classes,
    Navbar,
    NavbarGroup,
    NavbarHeading,
} from '@blueprintjs/core';

interface CustomNavbarProps {appGlobal: any}

const CustomNavbar = (props: CustomNavbarProps) => {

    const isAuthed = props.appGlobal.isAuthed();
    const LoginButton = () => {
        if (isAuthed) {
            return (<span></span>);
        }
        return (<AnchorButton
            href='/login'
            className={Classes.MINIMAL}
            icon='user'
            text='Log In'/>);
    };

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
            <NavbarGroup align={Alignment.RIGHT}>
                <LoginButton/>
            </NavbarGroup>
        </Navbar>
    );
};

export default CustomNavbar;
