import React, { useState, useTransition } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, deleteUser } from "firebase/auth";
import app from '../../Firebase/firebase.init';

const auth = getAuth(app);


const ReactLoginBoo = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');


    // signInWithEmailAndPassword function
    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess(false)

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);
                setSuccess(true);
                hanldeSignOut(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
            });
    }

    // handleEmailBlur function
    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setUserEmail(email);

    }

    // PasswordReset function
    const hanldePasswordReset = () => {
        if (!userEmail) {
            alert('Please input email.');
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                // Password reset email sent!
                alert('Password reset email sent!')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    // Sign Out function
    const hanldeSignOut = (user) => {
        console.log(user);
        deleteUser(user).then(() => {
            // User deleted.
        }).catch((error) => {
            // An error ocurred
        });
    }


    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-primary'>Login in you website</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={handleEmailBlur} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
                </div>
                {success && <p>Successfully Loign</p>}
                <h3>Please Register <Link to={'/register'}>Register</Link></h3>
                <p>Forget Password <button onClick={hanldePasswordReset} type="button" className="btn btn-link">Reset Password</button>
                </p>
                <p>Sign Out<button onClick={hanldeSignOut} type="button" className="btn btn-link">Sign Out</button>
                </p>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ReactLoginBoo;