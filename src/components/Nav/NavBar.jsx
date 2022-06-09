import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logocarrito from '../../Imagenes/carrito.svg';
import logoecommerce from '../../Imagenes/Logo-Rectangulo.png'
import Cart from '../Cart/Cart';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="d-flex flex-row mx-5">
                <Navbar.Brand href="#home">
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
                        <Nav.Link href="#home" className='mx-5'>Inicio</Nav.Link>
                        <Nav.Link href="#link">Nosotros</Nav.Link>
                        <NavDropdown title="Tienda" id="basic-nav-dropdown" className='mx-5'>
                            <NavDropdown.Item href="#action/3.1">Categoria 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Categoria 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Categoria 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Mas vendidos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link" className=''>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Cart />
            </Container>
        </Navbar>
    )
}

export default NavBar