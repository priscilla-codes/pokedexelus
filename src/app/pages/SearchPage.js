import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { selectSearchResults, searchAsync } from '../pokemonSlice';
import styled from 'styled-components';
import Pokemon from '../components/Pokemon';
import { Logo, LogoImage } from '../components/Logo.styled';
import SearchBox from '../components/SearchBox';

const SearchResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  h2 {
    margin-bottom: 2rem;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;
const SearchResults = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  @media (max-width: 52.75em) {
    padding: 0.5rem .5rem;
    font-size: .9rem;
  }
`;

const SearchPage = () => {
  const searchResults = useSelector(selectSearchResults);
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const logoImage = '/images/pokemon-logo.png';

  useEffect(() => {
    dispatch(searchAsync(keyword));
  }, [keyword]);

  return (
    <>
      <Logo to="/">
        <LogoImage src={logoImage} logo="search" />
        <span>Pokedexelus</span>
      </Logo>
      <SearchBox />
      <FavoritesLink to={'/favorites'}>
        <i class="fas fa-heart"></i>
        <span>Favorites</span>
      </FavoritesLink>
      <SearchResultsWrapper>
        {searchResults.length !== 0 && <h2>Search Results</h2>}
        <SearchResults>
          {searchResults.map(pokemon => {
            return <Pokemon key={pokemon.id} pokemon={pokemon} />;
          })}
        </SearchResults>
      </SearchResultsWrapper>
    </>
  );
};

export default SearchPage;
