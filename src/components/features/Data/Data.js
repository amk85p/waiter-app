import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { getTableById } from '../../../redux/tablesRedux';
import { editTableRequest } from '../../../redux/tablesRedux';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { Button } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';

const Data = ({ table, id }) => {
  const [peopleAmount, setPeopleAmount] = useState(0);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(0);
  const [status, setStatus] = useState('');
  const [bill, setBill] = useState(0);

  // console.log('table before use effect', table);
  useEffect(() => {
    setPeopleAmount(table.peopleAmount);
    setMaxPeopleAmount(table.maxPeopleAmount);
    setStatus(table.status);
    setBill(table.bill);
  }, [table]);

  const [error, setError] = useState(false);
  // const id = parseInt(table.id);
  // console.log('table', table);

  const handleSubmit = (e) => {
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
  };

  // console.log('error', error);
  const pplAmount = parseInt(peopleAmount);
  const maxPplAmount = parseInt(maxPeopleAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(bill, peopleAmount, '.', table.bill, table.peopleAmount);
    if ((status === 'Free' || status === 'Cleaning') && status !== 'Busy') {
      setPeopleAmount(0);
      setBill(0);
    }
    if (status === 'Reserved') {
      setBill(0);
    }
    if (status === 'Busy') {
      setStatus(status);
      setPeopleAmount(table.peopleAmount);
      setBill(table.bill);
    }
  }, [status]);

  return (
    <>
      <Col>
        <Card.Title>Table nr {id}</Card.Title>
      </Col>
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
                <Col md={4}>
                  <Form.Control
                    className='text-center'
                    type='number'
                    value={peopleAmount}
                    min='0'
                    max={maxPeopleAmount}
                    minLength='1'
                    maxLength='2'
                    placeholder={peopleAmount}
                    onChange={(e) => setPeopleAmount(e.target.value)}
                  />
                </Col>

                <p className='mx-1'>/</p>

                <Col md={4}>
                  <Form.Control
                    className='text-center'
                    type='number'
                    value={maxPeopleAmount}
                    min={peopleAmount}
                    max='10'
                    minLength='1'
                    maxLength='2'
                    placeholder={maxPeopleAmount}
                    onChange={(e) => setMaxPeopleAmount(e.target.value)}
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
                  <Col md={4}>
                    <Form.Control
                      className='text-center'
                      type='number'
                      min='0'
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
  // }
};

export default Data;
