import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';
import Home from './Home';
import About from './About';
import Rooms from './Rooms';
import Menu from './Menu';
import Contact from './Contact';



    function NavbarComp(){
    return(
<div>
<div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home"> 
          <img src={logo} width="30%"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                  
            </Nav>
            <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#rooms">Rooms</Nav.Link>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
</div>

    <Home/>
    <About/>
    <Rooms/>
    <Menu/>
    <Contact/>
</div>
    )
}
export default NavbarComp;