import Head from 'next/head'
import ContactComponent from './components/ContactComponent';

const Projects = () => {
  return   (
    <div>
    <Head>
      <title>Nick B | Contact</title>
      <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
      <link rel="icon" href="/logoNew.png" />
    </Head>
  <ContactComponent />
  </div>
  );
};

export default Projects;
