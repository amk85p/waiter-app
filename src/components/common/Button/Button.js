import Button from 'react-bootstrap/Button';

const ButtonApp = (props) => {
  return (
    <Button
      variant='primary'
      type='submit'
      text={props.text}
      onChange={props.onChange}
    >
      {props.children}
    </Button>
  );
};

export default ButtonApp;
