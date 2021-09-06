import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import SocialLinks from '@components/SocialLinks';

import * as S from './Hero.styles';

const Hero = () => {
  const title = useRef();
  const paragraph1 = useRef();
  const paragraph2 = useRef();
  const socialLinks = useRef();
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline();

    tl.current.from(title.current, 0.4, {
      opacity: 0,
      x: -30,
      delay: 0.5,
    });

    tl.current.from(
      paragraph1.current,
      0.4,
      {
        opacity: 0,
        x: -30,
      },
      '-=0.1'
    );

    tl.current.from(
      paragraph2.current,
      0.4,
      {
        opacity: 0,
        x: -30,
      },
      '-=0.1'
    );

    tl.current.from(
      socialLinks.current,
      0.4,
      {
        opacity: 0,
        y: 30,
      },
      '-=0.1'
    );
  }, []);

  return (
    <S.Container>
      <S.Title ref={title}>Making a difference.</S.Title>
      <S.Paragraph ref={paragraph1}>
        I'm <span>Zevs</span> (pronounced Zeus), a front-end developer and
        content creator who is apssionate about cyber security and privacy.
      </S.Paragraph>
      <S.Paragraph ref={paragraph2}>
        Want to have a chat?{' '}
        <S.LinkGradient href="mailto:zevs@tutamail.com">
          Send me an email
        </S.LinkGradient>
        .
      </S.Paragraph>

      <SocialLinks ref={socialLinks} />
    </S.Container>
  );
};

export default Hero;
