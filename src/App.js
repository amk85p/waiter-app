import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Footer from './components/vews/Footer/Footer';
import Header from './components/vews/Header/Header';
import { fetchTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import TableData from './components/pages/TableData/TableData';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />{' '}
        <Route path='/table/:id' element={<TableData />} />{' '}
        <Route path='/table/' element={<Home />} />{' '}
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <h1>404 NOT FOUND</h1>
            </main>
          }
        />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
