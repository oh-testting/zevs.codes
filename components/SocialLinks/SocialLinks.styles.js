import styled from 'styled-components';

export const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 18px;
  transition: 0.3s;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary} !important;
  }
`;

export const SocialContainer = styled.div`
  margin-top: 5px;
  display: inline-block;

  &:hover {
    ${SocialIcon} {
      color: ${({ theme }) => theme.colors.text.secondary};
    }
  }
`;
