import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../UserContext/AuthProvicer';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
        .then(() => {
            toast.error("Logout Successfully!", {
                position: toast.POSITION.TOP_CENTER
              })
            localStorage.removeItem('tour-token')
        })
        .catch(() => {})
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/"><Navbar.Brand> <img src="logo.png" width="80" alt="" /> </Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="text-decoration-none px-3 fw-bolder text-black" to="/">Home</NavLink>
                        <NavLink className="text-decoration-none px-3 fw-bolder text-black" to="/services">Services</NavLink>
                        <NavLink className="text-decoration-none px-3 fw-bolder text-black" to="/blog">Blog</NavLink>
                        {user && <NavLink className="text-decoration-none px-3 fw-bolder text-black" to="/add-a-service">Add a Service</NavLink>}
                        {user && <NavLink className="text-decoration-none px-3 fw-bolder text-black" to="/my-reviews">My Reviews</NavLink>}
                        {user && <NavLink className="text-decoration-none px-3 fw-bolder text-black" to="/my-services">My Services</NavLink>}
                        {!user && <NavLink className="text-decoration-none px-3 fw-bolder text-black" to="/login">Login</NavLink>}
                        {!user && <NavLink className="text-decoration-none px-3 fw-bolder text-black" to="/register">Register</NavLink>}

                        {user && <img width="40px" height="40px" className='rounded-circle' src={user?.photoURL} />}
                        {user && <NavDropdown id="basic-nav-dropdown">
                            <div className='p-2'>Welcome {user?.displayName}</div>
                          

                            <div onClick={handleLogout} style={{cursor: 'pointer'}} className="p-2 d-block text-decoration-none outline-0">Logout</div>

                        </NavDropdown>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;