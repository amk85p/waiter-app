import { NavLink, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg='primary' variant='dark' className='rounded'>
      <Navbar.Brand className='px-3' href='#home'>
        Navbar
      </Navbar.Brand>
      <Nav className='ms-auto'>
        <Nav.Link className='px-3' as={NavLink} href='/' to='/'>
          Home
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
