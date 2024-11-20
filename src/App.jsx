// App.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import music from "./assets/happy.mp3";
import "./App.css";

function App() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = React.useRef(null);

  const handleRSVP = () => {
    toggleMusic();
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 3000); // Hide after 3 seconds
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Bouquet animation settings
  const bouquetVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 360,
      transition: { duration: 0.6 },
    },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="app-container">
      <motion.div
        className="invite-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>✨ Birthday Celebration ✨</h2>
        <motion.div
          className="invite-details"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            Happy Birthday, Jessi! 🎉 Time flies, but with you, it feels
            like we’ve been friends forever. We met back in 2021, but honestly,
            it’s always felt like we’ve known each other for a lifetime. From
            our first conversation to all the countless memories we’ve created,
            every moment has been a blessing. You have this incredible ability
            to light up a room with your smile and make everyone feel at ease.
            You’ve been my cheerleader, my secret keeper, and the person who
            understands me even without words. I admire your strength, kindness,
            and the way you always find beauty in the little things. On your
            special day, I just want to say how grateful I am to have you in my
            life. May this year bring you as much joy, laughter, and love as
            you’ve brought into mine. You deserve all the happiness in the world
            and then some. Here’s to celebrating you today—your awesomeness,
            your dreams, and all the amazing things yet to come. Let’s make it a
            day to remember! Cheers to many more years of friendship and
            adventures! <br /> 🥂💖 With all my love !!
          </p>
          <p>🎂 Birthday Bash 🎂</p>
          <p>📅 Date:21 November</p>
        </motion.div>

        <motion.button
          className="rsvp-button"
          whileHover={{ scale: 1.1, backgroundColor: "#9a4efb" }}
          whileTap={{ scale: 0.9 }}
          onClick={handleRSVP}
        >
          HBD
        </motion.button>
      </motion.div>

      {/* Celebration Bouquet Animation */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            className="celebration-bouquet"
            variants={bouquetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            🎉🎊🎉
          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio element for background music */}
      <audio ref={audioRef} src={music} loop />
    </div>
  );
}

export default App;
