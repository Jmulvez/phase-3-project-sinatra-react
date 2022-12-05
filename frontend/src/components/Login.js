import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    let history = useHistory();
    return (
        <div>
            Login to continue
            <button onClick={() => {history.push('/home')}}>Login</button>
        </div>
    );
}

export default Login;