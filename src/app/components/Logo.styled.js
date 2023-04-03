import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  font-size: ${props => (props.logo === 'home' ? '3.2rem' : '2rem')};
  text-decoration: none;
  color: #000;

  @media (max-width: 52.75em) {
    font-size: ${props => (props.logo === 'home' ? '2.5rem' : '1.6rem')};
  }
`;

export const LogoImage = styled.img`
  width: ${props => (props.logoImage === 'home' ? '6rem' : '2rem')};
  height: ${props => (props.logoImage === 'home' ? '6rem' : '2rem')};
  object-fit: cover;
`;
