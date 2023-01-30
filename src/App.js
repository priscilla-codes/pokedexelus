import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Custom
import { GlobalStyles } from './Global';
import SearchPage from './pages/SearchPage';
import PokemonPage from './pages/PokemonPage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-size: 1.7rem;
  text-decoration: none;
  color: #000;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Container>
        <Logo to="/">Pokedexelus</Logo>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/pokemon/:name" element={<PokemonPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
