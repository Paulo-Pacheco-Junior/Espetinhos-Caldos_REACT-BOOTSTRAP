import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="/logo192.png"
                width="25"
                height="25"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Brand href="#">Espetinhos & Caldos</Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '250px' }}
          >
            <Nav.Link href="#action1">Quem Somos</Nav.Link>
            <Nav.Link href="#action2">Espetinhos</Nav.Link>
            <NavDropdown title="Jantinhas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Jantinha Individual
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Jantinha para 2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Jantinha Grande
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action6">Contato</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Qual a sua dúvida?..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;