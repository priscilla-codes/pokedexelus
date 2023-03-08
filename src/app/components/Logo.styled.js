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
`;

export const LogoImage = styled.img`
  width: ${props => (props.logoImage === 'home' ? '6rem' : '2rem')};
  height: ${props => (props.logoImage === 'home' ? '6rem' : '2rem')};
  object-fit: cover;
`;
