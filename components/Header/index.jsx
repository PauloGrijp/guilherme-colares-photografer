import { Container, Navbar } from "react-bootstrap";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  return (
    <Navbar className="bg-dark" variant="dark" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle arial-controls="navbar-toggle"/>
        <Navbar.Collapse id="navbar-toggle" className="justify-content-end">
          <Menu />  
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Header;
