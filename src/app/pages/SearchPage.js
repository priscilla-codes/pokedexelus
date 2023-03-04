import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { selectSearchResults, searchAsync } from '../pokemonSlice';
import styled from 'styled-components';
import Pokemon from '../components/Pokemon';
import Logo from '../components/Logo.styled';

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

const Form = styled.form`
  width: 50rem;
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

const SearchPage = () => {
  const { keyword } = useParams();
  const searchResults = useSelector(selectSearchResults);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchAsync(query));
    setQuery('');
  };

  useEffect(() => {
    dispatch(searchAsync(keyword));
  }, [keyword]);

  return (
    <>
      <Logo to="/">Pokedexelus</Logo>
      <Form onSubmit={handleSubmit}>
        <i class="fal fa-search"></i>
        <Input
          value={query}
          onChange={handleOnChange}
          placeholder="Search Pokemon"
        ></Input>
      </Form>
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
