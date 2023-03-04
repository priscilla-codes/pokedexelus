import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getPokemonByName } from '../pokemonSlice';
import { Logo, LogoImage } from '../components/Logo.styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;
const Details = styled.div`
  display: flex;
  justify-content: center;
  width: 50rem;
  height: 500px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 400px;
  height: 400px;
`;

const DetailsRight = styled.div`
  padding-top: 2rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  background-color: #638eef;
  align-self: flex-end;
  color: #fff;
  height: 100%;
`;

const DetailsLeft = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`;

const DetailsLeftWrapper = styled.div``;

const Header = styled.h2`
  display: flex;
  justify-content: center;
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 2rem;
  font-size: 1.5rem;
`;

const PokemonDetail = styled.span`
  display: block;
  padding: 1rem 0.5rem;
  margin-bottom: 0.63rem;
`;

const PokemonPage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector(getPokemonByName(name));
  const pokemonImg =
    pokemon.sprites.other['official-artwork'].front_default ||
    pokemon.sprites.front_default;
  const logoImage = '/images/pokemon-logo.png';
  return (
    <>
      <Logo to="/">
        <LogoImage src={logoImage} />
        <span>Pokedexelus</span>
      </Logo>
      <Wrapper>
        <Header>{pokemon.name}</Header>
        <Details>
          <DetailsLeft>
            <Image src={pokemonImg} />
          </DetailsLeft>
          <DetailsRight>
            <PokemonDetail>Height: {pokemon.height}</PokemonDetail>
            <PokemonDetail>Weight: {pokemon.weight}</PokemonDetail>
            <PokemonDetail>Experience: {pokemon.base_experience}</PokemonDetail>
          </DetailsRight>
        </Details>
      </Wrapper>
    </>
  );
};

export default PokemonPage;
