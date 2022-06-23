import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logoecommerce from '../../Imagenes/Logo-Rectangulo.png'
import CartIcon from '../Cart/CartIcon';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="d-flex flex-row mx-5">
                <Navbar.Brand>
                    <img
                        src={logoecommerce}
                        width="150px"
                        className="d-inline-block align-top mx-5"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-5" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='mx-5'>Inicio</NavLink>
                        <NavLink to='/categoria/globo' className='mx-5'>Categoria Globos</NavLink>
                        <NavLink to='/categoria/decoracion' className='mx-5'>Categoria Decoracion</NavLink>
                        <Nav.Link href="#link" className=''>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <NavLink to='/cart'>
                    <CartIcon />
                </NavLink>
            </Container>
        </Navbar>
    )
}

export default NavBar