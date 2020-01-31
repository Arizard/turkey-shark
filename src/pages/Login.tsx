import * as React from 'react';
import {Button, H1, Intent} from "@blueprintjs/core";
import {IconNames} from "@blueprintjs/icons";

interface LoginProps {
    startAuth: any;
}

const Login = (props: LoginProps) => {
    document.title = 'Log In'
    return (
        <div className='login-container'>
            <H1>Log In</H1>
            <table className='login-table'>
                <tbody>
                <tr>
                    <td>
                        <Button
                            icon={IconNames.LOCK}
                            text='Log in with Google'
                            intent={Intent.PRIMARY}
                            fill={true}
                            onClick={props.startAuth}
                            />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Login;
