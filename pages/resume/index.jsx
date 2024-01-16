import Head from 'next/head'
import MyPDFViewer from './components/MyPDFViewer';

const Projects = () => {
  return   (
    <div>
    <Head>
      <title>Nick B | Resume</title>
      <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
      <link rel="icon" href="/logoNew.png" />
    </Head>
    <MyPDFViewer />
  </div>
  );
};

export default Projects;
