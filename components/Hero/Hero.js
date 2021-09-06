import { IoLogoInstagram, IoLogoTwitter, IoLogoGithub } from 'react-icons/io5';

import * as S from './Hero.styles';

const Hero = () => {
  return (
    <S.Container>
      <S.Title>Making a difference.</S.Title>
      <S.Paragraph>
        I'm <span>Zevs</span> (pronounced Zeus), a front-end developer and
        content creator who is apssionate about cyber security and privacy.
      </S.Paragraph>
      <S.Paragraph>
        Want to have a chat?{' '}
        <S.LinkGradient href="mailto:zevs@tutamail.com">
          Send me an email
        </S.LinkGradient>
        .
      </S.Paragraph>
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
    </S.Container>
  );
};

export default Hero;
