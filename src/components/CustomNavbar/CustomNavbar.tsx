import * as React from 'react'
import {
    Alignment, AnchorButton,
    Button,
    Classes, Icon,
    Navbar,
    NavbarGroup,
    NavbarHeading, Text,
} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';
import {Link} from 'react-router-dom';


interface CustomNavbarProps {
    authed: boolean;
    user: any;
    logOut: any;
}


const CustomNavbar = (props: CustomNavbarProps) => {

    const isAuthed = props.authed;
    const LoginButton = () => {
        if (isAuthed) {
            return (<>
                <Icon icon={IconNames.PERSON} />
                &nbsp;
                <Text>{props.user.displayName ? props.user.displayName : 'Logged in user'}</Text>
                &nbsp;
                <AnchorButton
                    href={'/'}
                    text={'Log Out'}
                    icon={IconNames.LOG_OUT}
                    className={Classes.MINIMAL}
                    onClick={() => {props.logOut()}}/>
                </>);
        }
        return (<Link to={'/login'}><Button
            className={Classes.MINIMAL}
            icon={IconNames.LOG_IN}
            text='Log In'/></Link>);
    };

    return (
        <Navbar>
            <NavbarGroup align={Alignment.LEFT}>
                <NavbarHeading>Turkey Shark</NavbarHeading>
                <Link to={'/'}><Button
                    className={Classes.MINIMAL}
                    icon='home'
                    text='Home'/></Link>
                <Link to={'/about'}><Button
                    className={Classes.MINIMAL}
                    icon='info-sign'
                    text='About'/></Link>
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
                <LoginButton/>
            </NavbarGroup>
        </Navbar>
    );
};

export default CustomNavbar;
