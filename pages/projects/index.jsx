import Head from 'next/head'
import ProjectsComponent from './components/ProjectsComponent';

const Projects = () => {
  return   (
    <div>
    <Head>
      <title>Nick B | Projects</title>
      <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
      <link rel="icon" href="/logoNew.png" />
    </Head>
  <ProjectsComponent />
  </div>
  );
};

export default Projects;
