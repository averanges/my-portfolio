import Head from 'next/head'
import AboutComponent from './components/AboutComponent';

const About = () => {
  return   (
    <div>
    <Head>
      <title>Nick B | About</title>
      <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
      <link rel="icon" href="/logoNew.png" />
    </Head>
  <AboutComponent />
  </div>
  );
};

export default About;
