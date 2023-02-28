import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-size: ${props => (props.logo === 'home' ? '3.2rem' : '2rem')};
  text-decoration: none;
  color: #000;
`;

export default Logo;
