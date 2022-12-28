import { NavLink, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg='primary' variant='dark' className='rounded'>
      <Navbar.Brand className='px-3'>Waiter app</Navbar.Brand>
      <Nav className='ms-auto'>
        <Nav.Link className='px-3' as={Link} to='/'>
          Home
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
