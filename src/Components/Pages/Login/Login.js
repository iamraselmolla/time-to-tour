import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../UserContext/AuthProvicer';
import { GoogleAuthProvider } from 'firebase/auth'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/Usetitle';
const Login = () => {
    const [loginLoader, setLoader] = useState(false)
    const googleProvider = new GoogleAuthProvider();
    const { loginWithGoogle, login,logOut, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    useTitle('Login')
    const googleLogin = () => {

        loginWithGoogle(googleProvider)
            .then(res => {
                const currentUser = {email: res.user?.email}
                // Get jwt token
                fetch('https://service-server-beryl.vercel.app/jwt',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                .then(res=> {
                    if (res.status === 401 || res.status === 403) {
                        return logOut();
                    }
                   return res.json();
                })
                .then(data => {
                    localStorage.setItem('tour-token', data.token);
                    navigate(from, { replace: true });
                    toast.success("Login With Google Successfully!", {
                        position: toast.POSITION.TOP_CENTER
                    });
                })
               
            })
            .catch(err => console.log(err.message))
    }
    const handleLoginIn = (e) => {
        e.preventDefault()

        login(e.target.email.value, e.target.password.value)
            .then(res => {
                setLoader(true)
                const currentUser = {email: res.user?.email}
                // Get jwt token
                fetch('https://service-server-beryl.vercel.app/jwt',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                .then(res=> {
                    
                    if (res.status === 401 || res.status === 403) {
                        return logOut();
                    }
                   return res.json();
                })
                .then(data => {
                    localStorage.setItem('tour-token', data.token);
                    
                    navigate(from, { replace: true });
                    toast.success("Login Google Successfully!", {
                        position: toast.POSITION.TOP_CENTER
                    });
                    setLoader(false)
                })
               
                

                
            })
            .catch(err => {
                toast.error(err.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            })
    }
    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="px-4 py-5 rounded bg-black">
                        <h3 className="text-white mb-4 text-center fw-bolder">
                            {!user ? 'Login Here!' : 'You are currently Logged in here.'}
                        </h3>
                        {!user && <Form onSubmit={handleLoginIn} className='text-white fw-bold text-start'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className='bg-white mt-2 w-100 fw-bolder text-black' type="submit">
                                Login
                            </Button>
                            {loginLoader && <h2>loading...</h2>}
                        </Form>}
                        {!user && <div className="login-with-google">
                            <h4 className="text-white mt-3 fw-bolder">
                                Sign in using
                            </h4>
                            <Button onClick={googleLogin} className='w-100 fw-bolder btn-danger'><FaGoogle></FaGoogle> Google</Button>


                        </div>}
                        {!user && <div className="d-flex mt-2 justify-content-between">
                            <Link className='text-decoration-none fw-bolder' to="/forget-password">Forget Password?</Link>
                            <span className='text-white fw-bolder'>
                                New Here?
                                <Link className='text-decoration-none fw-bolder' to="/register"> Register!</Link>
                            </span>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;