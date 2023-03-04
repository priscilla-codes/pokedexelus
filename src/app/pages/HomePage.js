import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Logo, LogoImage } from '../components/Logo.styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 18rem;
`;

const Form = styled.form`
  width: 36rem;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 25rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  outline: none;
  border: 0;
`;

const HomePage = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const logoImage = './images/pokemon-logo.png';

  const submitHandler = e => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
    }
  };

  return (
    <Wrapper>
      <Logo to="/" logo="home">
        <LogoImage src={logoImage} logoImage="home" />
        <span>Pokedexelus</span>
      </Logo>
      <Form onSubmit={submitHandler}>
        <i class="fal fa-search"></i>
        <Input
          placeholder="Search Pokemon"
          onChange={e => setKeyword(e.target.value)}
        />
      </Form>
    </Wrapper>
  );
};

export default HomePage;
