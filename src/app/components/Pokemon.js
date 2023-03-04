import React from 'react';
import styled from 'styled-components';
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
`;

const Image = styled.img`
  object-fit: cover;
  height: 300px;
  width: 300px;
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
`;

const Pokemon = ({ pokemon }) => {
  const pokemonImg =
    pokemon.sprites.other['official-artwork'].front_default ||
    pokemon.sprites.front_default;
  return (
    <PokemonWrapper>
      <FavoriteIcon>
        <i className="fas fa-star"></i>
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
