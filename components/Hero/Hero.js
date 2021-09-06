import SocialLinks from '@components/SocialLinks';

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

      <SocialLinks />
    </S.Container>
  );
};

export default Hero;
