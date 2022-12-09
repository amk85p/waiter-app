import { Container } from 'react-bootstrap';

// import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack';
import Tables from '../../vews/Tables/Tables';

const Home = () => {
  return (
    <Container>
      <Stack gap={2}>
        <Tables />
      </Stack>
    </Container>
  );
};

export default Home;
