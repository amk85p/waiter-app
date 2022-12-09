import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ButtonApp from '../../common/Button/Button';
import { Row, Col, Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';

import { addTableRequest } from '../../../redux/tablesRedux';
import { useParams } from 'react-router-dom';

const Data = (table) => {
  console.log('table', table, table.id);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  const [status, setStatus] = useState(table.status);
  const [bill, setBill] = useState(table.bill);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTableRequest(parseInt(peopleAmount, maxPeopleAmount, bill), status)
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <hr></hr>
      <Row className='flex'>
        <Col>
          <Card.Title>Table nr {id} </Card.Title>
        </Col>
      </Row>
      <Row className='flex' xs='auto'>
        <Col className='my-2'>
          <Card.Text className='my-1'>Status</Card.Text>
        </Col>
        <Col>
          <Form.Select
            className='text-center'
            defaultValue={status}
            onChange={
              ((e) => setStatus(e.target.value), console.log('change status'))
            }
          >
            <option value='Free'>Free</option>
            <option value='Busy'>Busy</option>
            <option value='Cleaning'>Cleaning</option>
            <option value='Reserved'>Reserved</option>
          </Form.Select>
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
                  max='10'
                  minLength='2'
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
                  min='0'
                  max='10'
                  minLength='2'
                  maxLength='2'
                  placeholder={maxPeopleAmount}
                  onChange={(e) => setMaxPeopleAmount(e.target.value)}
                />
              </Col>
            </InputGroup>
          </Row>
        </Col>
      </Row>
      <Row xs='auto'>
        <Col className='my-2'>
          <Card.Text className='my-1'>Bill</Card.Text>
        </Col>
        <Col>
          <Row xs='auto'>
            <InputGroup>
              <p className='p-2'>$</p>
              <Col md={5}>
                <Form.Control
                  className='text-center'
                  type='number'
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

      <ButtonApp type='submit'>Update</ButtonApp>
    </form>
  );
};
export default Data;
