import React from 'react';
import { IoLogoInstagram, IoLogoTwitter, IoLogoGithub } from 'react-icons/io5';

import * as S from './SocialLinks.styles';

const SocialLinks = React.forwardRef((props, ref) => {
  return (
    <S.SocialContainer ref={ref}>
      <S.SocialIcon href="https://instagram.com/zevsno">
        <IoLogoInstagram />
      </S.SocialIcon>
      <S.SocialIcon href="https://twitter.com/zevsno">
        <IoLogoTwitter />
      </S.SocialIcon>
      <S.SocialIcon href="https://github.com/zevsno">
        <IoLogoGithub />
      </S.SocialIcon>
    </S.SocialContainer>
  );
});

export default SocialLinks;
