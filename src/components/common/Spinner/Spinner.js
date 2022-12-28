import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

const SpinnerApp = () => {
  return (
    <div>
      <Button className='my-3' variant='primary' disabled>
        <Spinner
          as='span'
          animation='border'
          size='sm'
          role='status'
          aria-hidden='true'
        />
        <span> Loading...</span>
      </Button>{' '}
      <br />
      <Button>
        <Nav.Link as={Link} to={'/'} className='p-0 text-white'>
          Home
        </Nav.Link>
      </Button>
    </div>
  );
};

export default SpinnerApp;
