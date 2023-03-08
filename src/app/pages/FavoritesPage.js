import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../pokemonSlice';
import Pokemon from '../components/Pokemon';
import { Logo, LogoImage } from '../components/Logo.styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;
const Header = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.3rem;
  font-weight: 600;
`;
const Content = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const logoImage = './images/pokemon-logo.png';
  return (
    <>
      <Logo to="/">
        <LogoImage src={logoImage} />
        <span>Pokedexelus</span>
      </Logo>
      <Wrapper>
        <Header>Favorites</Header>
        <Content>
          {favorites.map(pokemon => {
            return <Pokemon pokemon={pokemon} key={pokemon.id} />;
          })}
        </Content>
      </Wrapper>
    </>
  );
};

export default FavoritesPage;
