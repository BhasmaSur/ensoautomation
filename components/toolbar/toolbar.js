import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import styles from '../toolbar/toolbar.module.css'
import {useRef,useState} from 'react';

export const TOOLBAR = (props) => {

const[expanded,setExpanded]=useState(false);


  return (
<Navbar expanded={expanded}  collapseOnSelect expand="lg" bg="light" fixed="top" variant="dark">
      <Navbar.Brand href="#home">
      <img
                    className={styles.logo}
                    src="/images/logo.svg"
                    alt="First slide"
                />
      </Navbar.Brand>
      <Navbar.Toggle onClick={() => setExpanded((expanded) => (expanded = !expanded))} className={styles.navbartogglericonCustom} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav onClick={() => setExpanded((expanded) => (expanded = !expanded))}>
          <Nav.Link className={styles.navbarlinks} onClick={()=>props.navigatToFunction(1)}>Home</Nav.Link>
          <Nav.Link className={styles.navbarlinks} onClick={()=>props.navigatToFunction(2)}>About</Nav.Link>
          <Nav.Link className={styles.navbarlinks} onClick={()=>props.navigatToFunction(3)}>Our Services</Nav.Link>
          <Nav.Link className={styles.navbarlinks} onClick={()=>props.navigatToFunction(4)}>Applications</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
        </Nav>
        <Nav>
          {/* <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                 </Nav.Link> */}
          <button type="button" onClick={()=>props.navigatToFunction(5)} className={styles.btn}>Contact Us</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  )
}