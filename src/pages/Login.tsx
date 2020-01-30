import * as React from 'react';
import {Button, H1, InputGroup, Intent} from "@blueprintjs/core";
import {IconNames} from "@blueprintjs/icons";

interface LoginProps {
    appGlobal: any
}

const Login = (props: LoginProps) => {
    return (
        <div className='login-container'>
            <H1>Log In</H1>
            <table className='login-table'>
                <tbody>
                <tr>
                    <td><InputGroup
                        leftIcon={IconNames.USER}
                        placeholder='Enter your username or email address...'>
                    </InputGroup></td>
                </tr>
                <tr>
                    <td><InputGroup
                        leftIcon={IconNames.LOCK}
                        placeholder='Enter your password...'
                        type='password'>
                    </InputGroup></td>
                </tr>
                <tr>
                    <td>
                        <Button
                            text='Submit'
                            intent={Intent.PRIMARY}
                            fill={true}
                            />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Login;
