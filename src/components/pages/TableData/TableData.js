import { getTableById } from '../../../redux/tablesRedux';

import Card from 'react-bootstrap/Card';
import { Navigate } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import SpinnerApp from '../../common/Spinner/Spinner';

import Data from '../../features/Data/Data';

const TableData = () => {
  const { id } = useParams();

  const table = useSelector((state) => getTableById(state, id));

  if (!table) {
    // return <Navigate to='/' />;
    return <SpinnerApp />;
  } else {
    return (
      <div>
        <br />
        <Col>
          <Card.Title>Table nr {table.id}</Card.Title>
        </Col>

        <Data table={table} />
      </div>
    );
  }
};
export default TableData;
