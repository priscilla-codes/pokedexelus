import styled from 'styled-components';

// Custom
import { GlobalStyles } from './Global';
import SearchPage from './pages/SearchPage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <SearchPage />
      </Container>
    </>
  );
}

export default App;
