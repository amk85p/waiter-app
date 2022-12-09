import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from '../../common/Button/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TableTitle from '../../common/TableTitle/TableTitle';
// import Button from 'react-bootstrap/Button';

const Table = (props) => {
  return (
    <div>
      <hr></hr>
      <Row>
        <Col>
          <TableTitle id={props.id} />
        </Col>
        <Col xs={8}>
          <Card.Text>
            <b>Status </b>
            <span>{props.status}</span>
          </Card.Text>
        </Col>
        <Col>
          <Button className='p-1' variant='primary' underline='none'>
            <Nav.Item>
              <Link
                variant='primary'
                to={'/table/' + props.id}
                className='p-0 text-white'
                id={props.id}
              >
                Show more
              </Link>
            </Nav.Item>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Table;
