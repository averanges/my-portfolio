import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Typewriter = ({ sentences, period }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [currText, setCurrText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const sentence = sentences[currIndex];
      const text = currText;
      const sentenceLength = sentence.length;

      if (!isDeleting) {
        if (text.length < sentenceLength) {
          setCurrText((prevText) => sentence.substring(0, prevText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setCurrText((prevText) => sentence.substring(0, prevText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }
      }
    }, period);

    return () => clearInterval(interval);
  }, [currIndex, currText, isDeleting, period, sentences]);

  return (
    <motion.span
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {currText}
    </motion.span>
  );
};

export default Typewriter;