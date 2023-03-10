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
  @media (max-width: 52.75em) {
    margin-right: 0;
  }
`;

const Image = styled.img`
  object-fit: cover;
  height: 300px;
  width: 300px;
  @media (max-width: 52.75em) {
    height: 375px;
    width: 375px;
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
  padding-right: 1rem;
  cursor: pointer;

  .favorited,
  .unfavorited {
    color: #ffa41c;
  }
`;

const Pokemon = ({ pokemon }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const pokemonImg =
    pokemon.sprites.other['official-artwork'].front_default ||
    pokemon.sprites.front_default;
  return (
    <PokemonWrapper>
      <FavoriteIcon>
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
      <Link to={`/pokemon/${pokemon.name}`}>
        <ImageWrapper>
          <Image src={pokemonImg} />
        </ImageWrapper>
      </Link>
      <Name>{pokemon.name}</Name>
    </PokemonWrapper>
  );
};

export default Pokemon;
