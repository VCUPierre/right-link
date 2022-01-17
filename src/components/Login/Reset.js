import React, { useState, useContext } from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { sendPasswordResetEmail } from '../../utils/auth/firebase';
import { FirebaseContext } from '../../utils/auth/FirebaseContext';
import Header from '../Header/Header';
import './reset.css';

function Reset() {
    const [email, setEmail] = useState('');
    const { currentUser } = useContext(FirebaseContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <>
        <Header />
        <div className="reset">
            <div className="reset__container">
                <input
                    type="text"
                    className="reset__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <button
                    type="button"
                    className="reset__btn"
                    onClick={() => sendPasswordResetEmail(email)}
                >
                    Send password reset email
                </button>
                <div>
                    Don&apos;t have an account?{' '}
                    <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
        </>
    );
}
export default withRouter(Reset);
