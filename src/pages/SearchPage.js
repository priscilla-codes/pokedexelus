import styled from 'styled-components';
import Pokemon from '../components/Pokemon';
import data from '../pokemonData';
import Logo from '../components/Logo.styled';

const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-bottom: 2rem;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;
const SearchResults = styled.div`
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SearchPage = () => {
  const pokemon = data;

  return (
    <>
      <Logo to="/">Pokedexelus</Logo>
      <SearchResultsWrapper>
        <h2>Search Results</h2>
        <SearchResults>
          {pokemon.map(pokemon => {
            return <Pokemon key={pokemon.id} pokemon={pokemon} />;
          })}
        </SearchResults>
      </SearchResultsWrapper>
    </>
  );
};

export default SearchPage;
