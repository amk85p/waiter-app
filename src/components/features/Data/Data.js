import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
// import ButtonApp from '../../common/ButtonApp/ButtonApp';
import { Row, Col, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { getTableById } from '../../../redux/tablesRedux';
import { editTableRequest } from '../../../redux/tablesRedux';
import { useNavigate, Navigate } from 'react-router-dom';
import clsx from 'clsx';
import Alert from 'react-bootstrap/Alert';
// import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';
import SpinnerApp from '../../common/Spinner/Spinner';

const Data = ({ table }) => {
  // const { id } = useParams();

  // const table = useSelector((state) => getTableById(state, id));

  // const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
  // const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  // const [status, setStatus] = useState(table.status);
  // const [bill, setBill] = useState(table.bill);

  const [error, setError] = useState(false);
  const id = parseInt(table.id);
  console.log('table', table);

  const handleSubmit = (e) => {
    if (error === false) {
      e.preventDefault();
      dispatch(
        editTableRequest({
          id: parseInt(id),
          peopleAmount: parseInt(peopleAmount),
          maxPeopleAmount: parseInt(maxPeopleAmount),
          status,
          bill: parseInt(bill),
        })
      );
      navigate('/');
    } else {
      e.preventDefault();
      alert(
        'Too many persons at the table. Limit ' + maxPeopleAmount + ' persons.'
      );
      if (peopleAmount > maxPeopleAmount) {
        setPeopleAmount(maxPeopleAmount);
      }
    }
  };

  console.log('error', error);

  useEffect(() => {
    // if (table === undefined) {
    //   <SpinnerApp />;
    // }
    if (!table) {
      return navigate('/');
    } else {
      setPeopleAmount(table.peopleAmount);
      setMaxPeopleAmount(table.maxPeopleAmount);
      setStatus(table.status);
      setBill(table.bill);
    }
  }, []);

  console.log(
    'a',
    table,

    'id:',
    id,
    'typeof',
    (typeof id, typeof table)
  );

  const [peopleAmount, setPeopleAmount] = useState(0);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(0);
  const [status, setStatus] = useState('');
  const [bill, setBill] = useState(0);
  // const [error, setError] = useState(false);
  console.log('error', error);
  const pplAmount = parseInt(peopleAmount);
  const maxPplAmount = parseInt(maxPeopleAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status !== 'Busy') {
      setBill(0);
    }
    if (status === 'Cleaning' || status === 'Free') {
      setPeopleAmount(0);
      // setMaxPeopleAmount(0);
    }
  }, [status]);

  useEffect(() => {
    setTimeout(() => {
      if (pplAmount > maxPplAmount) {
        console.log('error', error);
        setError(true);
        setPeopleAmount(maxPeopleAmount);
        if (error === true) {
          console.log('error', error);

          alert(
            'Too many persons at the table. Limit ' +
              maxPeopleAmount +
              ' persons.'
          );
        }
      } else {
        setError(false);
      }
    }, 1000);
  }, [peopleAmount, maxPeopleAmount]);

  // useEffect(() => {
  //   if (error === true) {
  //     // setTimeout(() => {
  //     setPeopleAmount(maxPplAmount);
  //     // }, 1000);
  //   }
  // }, [maxPeopleAmount, peopleAmount]);

  console.log('error', error, table);

  const handlePeopleAmount = (amount) => {
    if (amount <= 0) {
      setPeopleAmount(0);
    } else {
      setPeopleAmount(amount);
    }
  };

  const handleMaxPeopleAmount = (amount) => {
    if (peopleAmount >= amount) {
      setPeopleAmount(amount);
      setMaxPeopleAmount(amount);
    } else if (amount >= 10) {
      setMaxPeopleAmount(10);
    } else {
      setMaxPeopleAmount(amount);
    }
  };

  if (!table) {
    return <Navigate to='/' />;
  } else {
    return (
      <>
        <div className={clsx(pplAmount <= maxPplAmount && 'visually-hidden')}>
          {' '}
          {['danger'].map((variant) => (
            <Alert key={variant} variant={variant}>
              Too many persons at the table. Limit {maxPeopleAmount} persons.
            </Alert>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <hr></hr>
          <Row className='flex'></Row>
          <Row className='flex' xs='auto'>
            <Col className='my-2'>
              <Card.Text className='my-1'>Status</Card.Text>
            </Col>
            <Col>
              <Form.Control
                as='select'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option className='text-center' value='Free'>
                  Free
                </option>
                <option className='text-center' value='Busy'>
                  Busy
                </option>
                <option className='text-center' value='Cleaning'>
                  Cleaning
                </option>
                <option className='text-center' value='Reserved'>
                  Reserved
                </option>
              </Form.Control>
            </Col>
          </Row>
          <Row xs='auto'>
            <Col className='my-2'>
              <Card.Text className='my-1'>People</Card.Text>
            </Col>

            <Col>
              <Row xs='auto'>
                <InputGroup>
                  <Col md={2}>
                    <Form.Control
                      className='text-center'
                      // type='number'
                      value={peopleAmount}
                      min='0'
                      max='10'
                      minLength='1'
                      maxLength='2'
                      placeholder={peopleAmount}
                      onChange={(e) => handlePeopleAmount(e.target.value)}
                      // isInvalid={pplAmount > maxPplAmount}
                    />
                  </Col>

                  <p className='mx-1'>/</p>

                  <Col md={2}>
                    <Form.Control
                      className='text-center'
                      // type='number'
                      value={maxPeopleAmount}
                      min='0'
                      max='10'
                      minLength='1'
                      maxLength='2'
                      placeholder={maxPeopleAmount}
                      onChange={(e) => handleMaxPeopleAmount(e.target.value)}
                      // isInvalid={pplAmount > maxPplAmount}
                    />
                  </Col>
                </InputGroup>
              </Row>
            </Col>
          </Row>

          <div className={clsx(status !== 'Busy' && 'visually-hidden')}>
            <Row xs='auto'>
              <Col className='my-2'>
                <Card.Text className='my-1'>Bill</Card.Text>
              </Col>
              <Col>
                <Row xs='auto'>
                  <InputGroup>
                    <p className='p-2'>$</p>
                    <Col md={3}>
                      <Form.Control
                        className='text-center'
                        // type='number'
                        minLength='1'
                        maxLength='3'
                        value={bill}
                        onChange={(e) => setBill(e.target.value)}
                      />
                    </Col>
                  </InputGroup>
                </Row>
              </Col>
            </Row>
          </div>

          <Button type='submit'>Update</Button>
        </form>
      </>
    );
  }
};
export default Data;
