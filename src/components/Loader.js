const { motion } = require("framer-motion");


const loadingBar = {
    initial: {
        width: 0,
    },
    animate: {
        width: "100%",
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

const blueBox = {
    initial: {
        height: "100vh",
        margin: "55px 0 0 0",
        bottom: 0,
        background: "rgb(224, 226, 238)",
    },
    animate: {
        height: 0,
        transition: {
            delay: 1.5,
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};

export default function Loader() {
    return (
        <div id="loader" className="d-flex justify-content-center">
            <motion.div className="loading-bar" initial="initial" animate="animate" variants={loadingBar}></motion.div>
            <motion.div className="w-100 initial-transition">
                <motion.div
                    className="w-100 blue-box"
                    initial="initial"
                    animate="animate"
                    variants={blueBox}
                    onAnimationStart={() => document.body.classList.add("overflow-hidden")}
                    onAnimationComplete={() => {
                        document.body.classList.remove("overflow-hidden");
                        document.getElementById("loader").style.zIndex = -999;
                    }
                    }
                />
            </motion.div>
        </div>
    )
}