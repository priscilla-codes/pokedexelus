import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Details = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

const Image = styled.img`
  object-fit: cover;
  width: 300px;
  height: 300px;
`;

const DetailsRight = styled.div`
  padding-top: 2rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  background-color: #638eef;
  height: 500px;
  align-self: flex-end;
  color: #fff;
`;

const DetailsLeft = styled.div`
  height: 500px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  margin-top: 1rem;
`;

const DetailsLeftWrapper = styled.div``;

const Header = styled.h2`
  display: flex;
  justify-content: center;
  text-transform: capitalize;
  font-weight: 600;
`;

const PokemonDetail = styled.span`
  display: block;
  margin-bottom: 0.63rem;
`;

const PokemonPage = () => {
  return (
    <Wrapper>
      <Details>
        <DetailsLeftWrapper>
          <Header>Pikachu</Header>
          <DetailsLeft>
            <Image src="../../images/pikachu.png" />
          </DetailsLeft>
        </DetailsLeftWrapper>
        <DetailsRight>
          <PokemonDetail>Height:4</PokemonDetail>
          <PokemonDetail>Weight: 60</PokemonDetail>
          <PokemonDetail>Experience: 112</PokemonDetail>
        </DetailsRight>
      </Details>
    </Wrapper>
  );
};

export default PokemonPage;
