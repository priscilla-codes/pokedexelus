import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  width: 40rem;
  width: ${props => (props.form === 'home' ? '40rem' : '50rem')};
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  outline: none;
  border: 0;
`;

const SearchBox = ({ form }) => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };
  return (
    <Form onSubmit={submitHandler} form={form}>
      <i class="fal fa-search"></i>
      <Input
        placeholder="Search Pokemon"
        onChange={e => setKeyword(e.target.value)}
      />
    </Form>
  );
};

export default SearchBox;
