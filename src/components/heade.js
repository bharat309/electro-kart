import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar bg='primary' varient='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>E-Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart'>
                <i className='fa fa-shopping-cart'></i>Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fa fa-user'></i>Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
