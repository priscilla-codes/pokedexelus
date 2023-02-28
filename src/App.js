import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Custom
import { GlobalStyles } from './Global';
import SearchPage from './pages/SearchPage';
import PokemonPage from './pages/PokemonPage';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/pokemon/:name" element={<PokemonPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
