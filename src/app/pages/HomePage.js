import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Logo, LogoImage } from '../components/Logo.styled';
import SearchBox from '../components/SearchBox';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 15rem;
  @media (max-width: 52.75em) {
    width: 100%;
  }
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
  const logoImage = './images/pokemon-logo.png';

  return (
    <Wrapper>
      <Logo to="/" logo="home">
        <LogoImage src={logoImage} logoImage="home" />
        <span>Pokedexelus</span>
      </Logo>
      <SearchBox form="home" />
      <FavoritesLink to={'/favorites'}>
        <i class="fas fa-heart"></i>
        <span>Favorites</span>
      </FavoritesLink>
    </Wrapper>
  );
};

export default HomePage;
