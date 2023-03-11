import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Custom
import { GlobalStyles } from './Global';
import SearchPage from './app/pages/SearchPage';
import PokemonPage from './app/pages/PokemonPage';
import FavoritesPage from './app/pages/FavoritesPage';
import HomePage from './app/pages/HomePage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: white;
  @media (max-width: 52.75em) {
    padding: 0 1rem;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Container>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/search/:keyword" element={<SearchPage />} />
          <Route path="/pokemon/:name" element={<PokemonPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
