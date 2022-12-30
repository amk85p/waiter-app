import { getTableById, getAllTables } from '../../../redux/tablesRedux';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SpinnerApp from '../../common/Spinner/Spinner';
import Data from '../../features/Data/Data';

const TableData = () => {
  const { id } = useParams();
  const table = useSelector((state) => getTableById(state, parseInt(id)));
  const tables = useSelector((state) => getAllTables(state));

  if (!table && !tables.length) {
    return <SpinnerApp />;
  }
  if (!table && tables.length) {
    return <Navigate to='/' />;
  }
  // console.log('2table', table);
  return (
    <div>
      <br />
      <Data table={table} id={id} />
    </div>
  );
};
export default TableData;
