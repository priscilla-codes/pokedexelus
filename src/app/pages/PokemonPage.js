import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPokemonByName } from '../pokemonSlice';
import { Logo, LogoImage } from '../components/Logo.styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  @media (max-width: 52.75em) {
    width: 100%;
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: center;
  width: 50rem;
  height: 500px;
  @media (max-width: 52.75em) {
    height: auto;
    width: 100%;
    flex-direction: column;
  }

  @media (max-width: 40em) {
    margin-bottom: 5rem;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 400px;
  height: 400px;
  @media (max-width: 52.75em) {
    width: 375px;
    height: 375px;
  }

  @media (max-width: 40em) {
    width: 100%;
    height: auto;
  }
`;

const DetailsRight = styled.div`
  padding-top: 2rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  background-color: #638eef;
  align-self: flex-end;
  color: #fff;
  height: 100%;
  border-radius: 6px;
  @media (max-width: 52.75em) {
    padding: 0;
    width: 100%;
  }
`;

const DetailsLeft = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 6px;

  @media (min-width: 52.8125em) {
    margin-right: 1rem;
  }

  @media (max-width: 52.75em) {
    margin-bottom: 1rem;
    width: 100%;
  }
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
      <FavoritesLink to={'/favorites'}>
        <i class="fas fa-heart"></i>
        <span>Favorites</span>
      </FavoritesLink>
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
