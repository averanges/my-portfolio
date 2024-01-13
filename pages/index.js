import Head from 'next/head'
import Main from './main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nick B | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/logoNew.png" />
      </Head>
      <Main />
    </div>
  )
}
