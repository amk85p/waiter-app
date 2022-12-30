import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
// import Button from '../../common/ButtonApp/ButtonApp';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import TableTitle from '../../common/TableTitle/TableTitle';

const Table = ({ table }) => {
  // console.log('id:', table.id);

  return (
    <div>
      <ListGroup>
        <hr></hr>
        <Row>
          <Col>
            <h4>Table id {table.id} </h4>
          </Col>
          <Col xs={8}>
            <Card.Text>
              <b>Status </b>
              <span>{table.status}</span>
            </Card.Text>
          </Col>
          <Col>
            <Button>
              <Nav.Link
                as={Link}
                to={'/table/' + table.id}
                className='p-0 text-white'
              >
                Show more
              </Nav.Link>
            </Button>
          </Col>
        </Row>
      </ListGroup>
    </div>
  );
};

export default Table;
