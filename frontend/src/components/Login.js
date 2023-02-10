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
                type="password"
                label="password"
                placeholder="Password"
                />
            </form>
            <button onClick={() => {history.push('/directors')}}>Login</button>
            <div>
                <img src="https://images.all-free-download.com/images/graphiclarge/movie_logo_design_text_reel_filmstrip_icons_decoration_6829232.jpg" alt=""/>
            </div>
        </div>
    );
}

export default Login;