import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  max-width: 450px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  margin-bottom: 10px;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Paragraph = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.8;
  margin-bottom: 10px;

  span {
    color: #fff;
  }
`;

export const LinkGradient = styled.a`
  text-decoration: none;
  background-color: #005bea;
  background-image: linear-gradient(45deg, #00c6fb, #005bea);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-weight: 600;
`;
