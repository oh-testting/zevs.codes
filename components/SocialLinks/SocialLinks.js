import { IoLogoInstagram, IoLogoTwitter, IoLogoGithub } from 'react-icons/io5';

import * as S from './SocialLinks.styles';

const SocialLinks = () => {
  return (
    <S.SocialContainer>
      <S.SocialIcon href="#">
        <IoLogoInstagram />
      </S.SocialIcon>
      <S.SocialIcon href="#">
        <IoLogoTwitter />
      </S.SocialIcon>
      <S.SocialIcon href="#">
        <IoLogoGithub />
      </S.SocialIcon>
    </S.SocialContainer>
  );
};

export default SocialLinks;
