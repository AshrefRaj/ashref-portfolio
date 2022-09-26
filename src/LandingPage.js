import Styles from './client/assets/styles/landingPage.module.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function navBar() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Ashref Raj</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="/calculator">Projects</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profiles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">GitHub</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

const LandingPage = (props) => {
  return (
    <main className={Styles.landinPageMain}>
      {navBar()}
      WIP, Please checkout Projects
    </main>
  )
}

export default LandingPage
