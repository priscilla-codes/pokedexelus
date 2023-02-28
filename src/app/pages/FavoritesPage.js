import styled from 'styled-components';
import Pokemon from '../components/Pokemon';
import data from '../../pokemonData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.3rem;
  font-weight: 600;
`;
const Content = styled.div`
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FavoritesPage = () => {
  const favorites = data;
  return (
    <Wrapper>
      <Header>Favorites</Header>
      <Content>
        {favorites.map(pokemon => {
          return <Pokemon pokemon={pokemon} key={pokemon.id} />;
        })}
      </Content>
    </Wrapper>
  );
};

export default FavoritesPage;
