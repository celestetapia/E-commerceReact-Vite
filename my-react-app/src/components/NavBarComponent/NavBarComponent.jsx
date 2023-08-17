import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import styles from "./NavBar.module.css";


const NavBar = () => {
    return (
        <Navbar expand="lg" bg="dark" variant='dark'>
            <Container>
                <Navbar.Brand href="#home" className={styles.brandStyle}>E - S H O P</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Novedades</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Categoria 1
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Categoria 2
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget />
        </Navbar>
    );
}

export default NavBar;