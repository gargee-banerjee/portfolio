// import React from 'react'
import { motion } from "framer-motion"
import guideImg from "../asset/guide-3.png"
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import fumesImage from "../asset/fumes-10.png"
import stoneBase from "../asset/stone-base.png"
import stone1 from "../asset/stone-1.png";
import stone2 from "../asset/stone-2.png";

const useStyles = makeStyles((theme) => ({
    guideOuterContainer: {

        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        padding: "2rem",
        backgroundColor: "black",


    },
    test: {
        width: "100px",
        height: "100px",
        backgroundColor: "green",
    },
    guideImgOuterContainer: {
        width: "200px",
        position: "relative",
        zIndex: "200",

        "& img": {
            width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "150px",

        },

    },
    guideImgOuterOuterContainer: {

    },
    gradientCircle: {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0), #ff7e5f)",
    },
    outerEarthContainer: {
        zIndex: "100",
        position: "absolute",
        bottom: "8rem",
        [theme.breakpoints.up("sm")]: {
            bottom: "16rem",

        },

    },
    earthContainer1: {
        width: "220px",
        height: "50px",
        [theme.breakpoints.down("xs")]: {
            width: "120px",
        },
        "& img": {
            width: "100%",
        },

    },
    earthContainer2: {
        width: "220px",
        height: "50px",
        left: "53rem",
        [theme.breakpoints.down("xs")]: {
            left: "13rem",
            width: "120px",
        },
        "& img": {
            width: "100%",
        },

    },
    fumesContainer: {
        width: "200px",
        // height: "200px",
        position: "absolute",
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        // zIndex: "1",

        "& img": {
            width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "150px",

        },
    },
    stoneBaseOuterContainer: {
        // backgroundImage: `url(${stoneBase})`,
        width: "100vw",
        position: "absolute",
        bottom: "0",
        overflow: "hidden",
        // height: "100%",
        // zIndex: "1",
        "& img": {
            width: "100%",
            [theme.breakpoints.down("xs")]: {
                width: "200%"
            },
        },
    },
}));
const GuideAnimation2 = () => {
    const styles = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("xs"));
    console.log(matches)
    const guideVariants = {
        guideAnimate0: { y: 0 },
        guideAnimate90: { y: 90 },

    }
    return (
        <div className={styles.guideOuterContainer}>
            <div className={styles.stoneBaseOuterContainer}>
                <img src={stoneBase}></img>
            </div>
            <motion.div className={styles.fumesContainer}
                animate={{
                    opacity: [0, 0.1, 0.5, 0.8, 0.3, 0],
                    scale: [1, 1.5],
                    y: [-50, -400],
                    x: [-20, 3],
                }}
                transition={{
                    duration: 3,
                    ease: "easeInOut",
                    delay: 0
                }}
            >
                <img src={fumesImage}></img>
            </motion.div>
            <motion.div className={styles.fumesContainer}
                animate={{
                    opacity: [0, 0.1, 0.5, 0.8, 0.3, 0],
                    scale: [1, 1.5],
                    y: [-50, -300],
                    x: [-180, -180],
                }}
                transition={{
                    duration: 3,
                    ease: "easeInOut",
                    delay: 0.2
                }}
            >
                <img src={fumesImage}></img>
            </motion.div>


            <motion.div
                className={styles.guideImgOuterOuterContainer}

                initial={{ y: -1000 }}
                variants={guideVariants}
                animate={matches === true ? "guideAnimate90" : "guideAnimate0"}

                transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 80,
                    delay: 0.2

                }}
            >
                <motion.div
                    className={styles.guideImgOuterContainer}
                    animate={{
                        scale: [1, 1, 1.5],
                        // rotate: [0, 0, 180, 180,0],
                        rotateY: [0, 360, 0],
                        //         borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeInOut",
                        // repeatType: "loop",
                        // repeat: 1,
                        // delay: 1
                    }}
                >
                    <img src={guideImg}></img>
                </motion.div>
            </motion.div>



            <motion.div className={`${styles.earthContainer1} ${styles.outerEarthContainer}`}
                animate={{
                    y: [0, -600],
                    x: [0, -100],
                    rotate: [0, 20],
                    // opacity: [1,0],
                }}
                transition={{
                    delay: 0.6,
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            ><img src={stone1}></img></motion.div>
            <motion.div className={`${styles.earthContainer2} ${styles.outerEarthContainer}`}
                animate={{
                    y: [0, -600],
                    x: [0, 10],
                    rotate: [0, -20],
                }}
                transition={{
                    delay: 0.6,
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            ><img src={stone2}></img></motion.div>

        </div >

    )
}

export default GuideAnimation2