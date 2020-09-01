import Link from "next/link";
import { useState, useEffect } from 'react';
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    const [logStatus, setLogStatus] = useState(false);
    useEffect(() => {
        localStorage.getItem('token') ? setLogStatus(true) : setLogStatus(false);
    }, [])
    const logout = () => {
        if (localStorage) {
            localStorage.removeItem('token')
            setLogStatus(false);
        }
    }
    return (
        <Navbar className="navbar navbar-dark bg-dark mb-4" expand="lg">
            <div className="container">
                <Navbar.Brand>
                    <Link href="/">
                        <a className="navbar-brand">Blog</a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav>
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </Nav>
                        <Nav>
                            <Link href="/products">
                                <a className="nav-link">Products</a>
                            </Link>
                        </Nav>
                        {
                            logStatus ? (
                                <Nav>
                                    <Link href="#">
                                        <a className="nav-link" onClick={logout}>Logout</a>
                                    </Link>
                                </Nav>
                            ) :
                                (<Nav>
                                    <Link href="/users/login">
                                        <a className="nav-link">Login</a>
                                    </Link>
                                </Nav>)

                        }

                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
};

export default NavBar;
