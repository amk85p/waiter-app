import { Card } from 'react-bootstrap';

const TableTitle = (props) => {
  return <Card.Title id={props.id}>Table nr {props.id}</Card.Title>;
};

export default TableTitle;
