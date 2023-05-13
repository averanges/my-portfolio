import { useRouter } from 'next/router';
import AnimatedPage from '../components/AnimatedPage';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Provider } from 'react-redux'
import store from '../store/store';


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const location = router.pathname

  const [showScreen, setShowScreen] = useState(false);

  const handleCloseScreen = () => {
    setShowScreen(false);
  };

  const handleAnimationComplete = () => {
    router.push(location);
  };
  return (
    <Provider store={store}>
      <AnimatedPage key={location} onClose={handleCloseScreen} onAnimationComplete={handleAnimationComplete} duration={0.6}/>
        <motion.div key={`motion-div-${location}`} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}}>
          <Navbar />
          <Component {...pageProps} />
        </motion.div>
    </Provider>
  );
}

export default MyApp;
