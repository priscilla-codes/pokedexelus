import styled from 'styled-components';
import Pokemon from '../components/Pokemon';

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
  const pokemon = [
    {
      id: 1,
      name: 'blastoise-mega',
      img: '../../images/blastoise-mega.png',
      height: 16,
      weight: 1011,
      experience: 284
    },
    {
      id: 2,
      name: 'charizard-mega-x',
      img: '../../images/charizard-mega-x.png',
      height: 17,
      weight: 1105,
      experience: 285
    },
    {
      id: 3,
      name: 'meganium',
      img: '../../images/meganium.png',
      height: 18,
      weight: 1005,
      experience: 236
    },
    {
      id: 4,
      name: 'pikachu',
      img: '../../images/pikachu.png',
      height: 4,
      weight: 60,
      experience: 112
    },
    {
      id: 5,
      name: 'venusaur-mega',
      img: '../../images/venusaur-mega.png',
      height: 24,
      weight: 1555,
      experience: 281
    }
  ];
  return (
    <SearchResultsWrapper>
      <h2>Search Results</h2>
      <SearchResults>
        {pokemon.map(pokemon => {
          return <Pokemon key={pokemon.id} pokemon={pokemon} />;
        })}
      </SearchResults>
    </SearchResultsWrapper>
  );
};

export default SearchPage;
