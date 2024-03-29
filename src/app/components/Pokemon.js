import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { favorite, unfavorite, selectFavorites } from '../pokemonSlice';
import { Link } from 'react-router-dom';

const PokemonWrapper = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-basis: 20%;
  box-shadow: rgb(0 0 0 / 4%) 0px 6px 12px 4px, rgb(0 0 0 / 4%) 0px 4px 10px 2px,
    rgb(0 0 0 / 6%) 0px 2px 8px, rgb(0 0 0 / 4%) 0px 2px 4px;
  margin-right: 2rem;
  margin-bottom: 2rem;
  position: relative;

  a {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    color: #000;
    text-transform: capitalize;
    font-size: 1.1rem;
  }
  @media (max-width: 52.75em) {
    margin-right: 0;
  }
`;

const Image = styled.img`
  object-fit: cover;
  height: 300px;
  width: 300px;
  @media (max-width: 52.75em) {
    height: 350px;
    width: 350px;
  }
`;

const Name = styled.span`
  font-weight: 500;
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div``;

const FavoriteIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;

  .favorited,
  .unfavorited {
    color: #ffa41c;
    padding: 1rem;
  }
`;

const Pokemon = ({ pokemon }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const pokemonImg =
    pokemon.sprites.other['official-artwork'].front_default ||
    pokemon.sprites.front_default;

  const handleFavorite = e => {
    e.preventDefault();
  };
  return (
    <PokemonWrapper>
      <Link to={`/pokemon/${pokemon.name}`}>
        <FavoriteIcon onClick={handleFavorite}>
          {favorites.includes(pokemon) ? (
            <i
              className="fas fa-star favorited"
              onClick={() => dispatch(unfavorite(pokemon))}
            ></i>
          ) : (
            <i
              className="fal fa-star unfavorited"
              onClick={() => dispatch(favorite(pokemon))}
            ></i>
          )}
        </FavoriteIcon>
        <ImageWrapper>
          <Image src={pokemonImg} />
        </ImageWrapper>
        <Name>{pokemon.name}</Name>
      </Link>
    </PokemonWrapper>
  );
};

export default Pokemon;
