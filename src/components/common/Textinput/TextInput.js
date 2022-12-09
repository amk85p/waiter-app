const TextInput = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      type='text'
    />
  );
};

export default TextInput;
