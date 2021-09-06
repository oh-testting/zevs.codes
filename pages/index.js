import Head from 'next/head';

import Hero from '@components/Hero';

import * as S from '@styles/pages/Home.styles';

const Home = () => {
  return (
    <S.Wrapper>
      <Head>
        <meta
          name="description"
          content="Front-end developer and content creator."
        />
        <meta
          name="keywords"
          content="zevs, developer, designer, content creator, font-end developer, privacy"
        />
        <meta name="theme-color" content="#000000" />
        <title>Zevs — Front-end developer</title>
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </Head>

      <Hero />
    </S.Wrapper>
  );
};

export default Home;
