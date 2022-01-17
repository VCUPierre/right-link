import React, { useCallback } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
    registerWithEmailAndPassword,
    signInWithGoogle,
} from '../../utils/auth/firebase';
import Header from '../Header/Header';
import './register.css';

function Register({ history }) {
    const handleSignUp = useCallback(
        async (event) => {
            event.preventDefault();
            const { name, email, password } = event.target.elements;
            try {
                await registerWithEmailAndPassword(
                    name.value,
                    email.value,
                    password.value
                );
                history.push('/');
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );
    return (
        <>
        <Header />
        <div className="register">
            <form className="register__container" onSubmit={handleSignUp}>
                <h1>Register</h1>
                <input
                    className="register__textBox"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    className="register__textBox"
                    name="email"
                    type="email"
                    placeholder="Email"
                />
                <input
                    className="register__textBox"
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button className="register__btn" type="submit">
                    Sign Up
                </button>
                <button
                    type="button"
                    className="login__btn login__google"
                    onClick={signInWithGoogle}
                >
                    Register with Google
                </button>
                <div>
                    Already have an account? <Link to="/">Login</Link> now.
                </div>
            </form>
        </div>
        </>
    );
}
export default withRouter(Register);
