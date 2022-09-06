import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/download.png';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import Footer from "../Sections/footer";

window.onscroll = function() {myFunction()};

var navbar = document.querySelector("nav");

function myFunction() {
  if (window.pageYOffset>=20) {
    navbar.classList.add("sticked")
  } else {
    navbar.classList.remove("sticked");
  }
}

function NavBars(){

    return <div>
        <Navbar expand="lg">
      <Container fluid>
        <Link to={"/home"} className='navbar-brand'>
            <img src={logo} title="logo"/>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={'/home'} className='nav-link'>Home</Link>
            
               <button type='button'>Contact Us <span> <IoIosArrowForward /> </span></button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
}

export default NavBars;