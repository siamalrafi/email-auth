import React, { useState, useTransition } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { getAuth, updateProfile, sendEmailVerification, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/firebase.init';
import { Link } from 'react-router-dom';


const auth = getAuth(app);




const ReactRegisBoostrap = () => {

    const [password, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);

    // handleRegister function
    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const name = form.name.value;
        console.log(name);
        const email = form.email.value;
        const password = form.password.value;
      
        // Check password Strong or week.
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('two upper case');
            return
        }
        if (password.lenght < 6) {
            setPasswordError('more word');
            return
        }
        if (!/(?=.*[!#$%&? "])/.test(password)) {
            setPasswordError('need special characters');
            return;
        }

        setPasswordError('');

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
                verifyEmail();
                updateUserName(name);
                // ...
            })
            .catch((error) => {
                console.log('error', error);
                setPasswordError(error.message);
            });

        // sendEmailVerification function
        const verifyEmail = () => {
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    // Email verification sent!
                    alert('Please check your email.')
                });
        }

        // update user name function
        const updateUserName = (name) => {
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                // An error occurred
                // ...
            });
        }

    }


    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-primary'>Register is here.</h1>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                {password && <p>error{password}</p>}
                {success && <p className='text-success'>user Created successfully</p>}
                <h2>Already have an account <small><Link to={'/login'}>Login</Link></small></h2>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default ReactRegisBoostrap;