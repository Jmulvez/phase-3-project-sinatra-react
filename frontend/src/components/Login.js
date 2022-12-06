import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    let history = useHistory();
    return (
        <div>
            Login to continue
            <form>
                <input
                label="username"
                placeholder="Username"
                />
                <input
                label="password"
                placeholder="Password"
                />
            </form>
            <button onClick={() => {history.push('/home')}}>Login</button>
        </div>
    );
}

export default Login;