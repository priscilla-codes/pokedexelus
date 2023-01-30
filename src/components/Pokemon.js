import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PokemonWrapper = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-basis: 20%;
  background-color: #f9f9f9;
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
  return (
    <PokemonWrapper>
      <FavoriteIcon>
        <i className="fas fa-star"></i>
      </FavoriteIcon>
      <Link to={`/pokemon/${pokemon.name}`}>
        <ImageWrapper>
          <Image src={pokemon.img} />
        </ImageWrapper>
      </Link>
      <Name>{pokemon.name}</Name>
    </PokemonWrapper>
  );
};

export default Pokemon;
