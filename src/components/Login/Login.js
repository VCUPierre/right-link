import React, { useContext, useCallback } from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';
import firebaseApp, { signInWithGoogle } from '../../utils/auth/firebase';
import { FirebaseContext } from '../../utils/auth/FirebaseContext';
import Header from '../Header/Header';
import './login.css';

function Login({ history }) {
    const { currentUser } = useContext(FirebaseContext);

    const handleLogin = useCallback(
        async (event) => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebaseApp
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/');
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <>
        <Header />
        <div className="login">
            <form className="login__container" onSubmit={handleLogin}>
                <h1>Log in</h1>
                <input
                    className="login__textBox"
                    name="email"
                    type="text"
                    placeholder="Email"
                />
                <input
                    className="login__textBox"
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button className="login__btn" type="submit">
                    Log in
                </button>
                <button
                    type="button"
                    className="login__btn login__google"
                    onClick={signInWithGoogle}
                >
                    Login with Google
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don&apos;t have an account?{' '}
                    <Link to="/register">Register</Link> now.
                </div>
            </form>
        </div>
        </>
    );
}
export default withRouter(Login);
