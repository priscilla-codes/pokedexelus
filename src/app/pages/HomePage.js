import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Logo, LogoImage } from '../components/Logo.styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 15rem;
`;

const Form = styled.form`
  width: 40rem;
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

const FavoritesLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 6rem;
  color: black;
  position: absolute;
  top: 1rem;
  right: 5%;
  text-decoration: none;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  .fas {
    padding-right: 0.5rem;
    color: #ed1b24;
  }
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
      <FavoritesLink to={'/favorites'}>
        <i class="fas fa-heart"></i>
        <span>Favorites</span>
      </FavoritesLink>
    </Wrapper>
  );
};

export default HomePage;
