import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { addTableRequest } from '../../../redux/tablesRedux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import Data from '../../features/Data/Data';

// import Form from 'react-bootstrap/Form';

const TableData = () => {
  const { id } = useParams();

  const tableData = useSelector((state) => getTableById(state, parseInt(id)));

  console.log('tableData object:', tableData);
  // console.log('peopleAmount:', peopleAmount);
  //console.log('tableData.peopleAmount:', tableData.peopleAmount);

  console.log('data', tableData);

  return (
    <Container>
      {tableData.map((table) => (
        <Data key={table.id} {...table} />
      ))}
    </Container>
  );
};

export default TableData;
