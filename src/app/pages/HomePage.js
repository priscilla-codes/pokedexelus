import styled from 'styled-components';
import Logo from '../components/Logo.styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 18rem;
`;

const Form = styled.form`
  width: 36rem;
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

const HomePage = () => {
  return (
    <Wrapper>
      <Logo to="/" logo="home">
        Pokedexelus
      </Logo>
      <Form>
        <i class="fal fa-search"></i>
        <Input placeholder="Search Pokemon" />
      </Form>
    </Wrapper>
  );
};

export default HomePage;
