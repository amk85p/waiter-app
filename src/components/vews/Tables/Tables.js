import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import Table from '../Table/Table';
import { Button } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

const Tables = () => {
  const tables = useSelector((state) => getAllTables(state));

  console.log(tables);
  if (tables.length === 0)
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
      </div>
    );

  return (
    <>
      <h1>All Tables</h1>

      {tables.map((table) => (
        <Table key={table.id} id={table.id} table={table} {...table} />
      ))}
    </>
  );
};

export default Tables;
