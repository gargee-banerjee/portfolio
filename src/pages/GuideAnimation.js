import React from 'react'
import { motion } from "framer-motion"
import guideImg from "../asset/guide-3.png"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  guideOuterContainer: {

    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",

    // background: 'linear-gradient(to right, #ff7e5f, #feb47b)',

  },
  guideImgOuterContainer: {
    // backgroundColor: "",
    width: "200px",
    height: "200px"

  },
  gradientCircle: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0), #ff7e5f)",
    /* Adjust the colors and direction of the gradient as needed */
  }
});
const GuideAnimation = () => {
  const styles = useStyles();
  return (
    <div
      className={styles.guideOuterContainer}

    >

      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 100
        }}
      >

        <motion.div
          className={styles.guideImgOuterContainer}

          animate={{
            scale: [1, 1,2],
            // rotate: [0, 0, 180, 180,0],
            rotateY: [0, 360,0],
            //         borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
            repeatType: "loop",
            repeat: 1,
            delay: 0.4
          }}

        >
          <img style={{ width: "100%" }} src={guideImg}></img>
        </motion.div>
      </motion.div>

    </div >

  )
}

export default GuideAnimation