import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { IconContext } from "react-icons";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from './NavBar';
import Loader from './Loader';
import CV from '../Oisin_Tohak_CV.pdf';
// import USER from '../images/USER.png';
import PROFILE_PICTURE from '../images/PROFILE_PICTURE.jpg'


export default function About({ isFirstMount }) {
    const container = {
        animate: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: isFirstMount ? 3 : 0,
            },
        },
        exit: {
            opacity: 0,
        },
    };

    const links = {
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: isFirstMount ? 3.4 : 0.4,
            },
        },
        exit: {
            opacity: 0,
        },
    };

    const picture = {
        initial: {
            opacity: 0,
            x: -80,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
            },
        },
        exit: {
            opacity: 0,
            x: 80,
            transition: {
                duration: 0.4,
            },
        },
    };
    const text = {
        initial: {
            opacity: 0,
            x: -80,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                when: "beforeChildren",
                duration: 0.4,
                delayChildren: 0.2,
                staggerChildren: 0.2,
            },
        },
        exit: {
            opacity: 0,
            x: 80,
            transition: {
                duration: 0.4,
            },
        },
    };

    const highlight = {
        initial: {
            opacity: 0,
            y: -40,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
        exit: {
            opacity: 0,
            y: 40,
            transition: {
                duration: 0.2,
            },
        },
    };

    const link = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        // content wrapped to separate from footer

        <div>
            <Helmet>
                <title>Oisín Tohak | About</title>
            </Helmet>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: "2em", className: "react-icons" }}>
                {isFirstMount && <Loader />}
                <Navbar />
                <div >
                    <div className="container h-100">
                        <motion.div className="row align-items-center pt-4" initial="initial" animate="animate" exit="exit" variants={container} >
                            <div className="col-auto">
                                <motion.div className="d-inline-block profile-picture" variants={picture}>
                                    <img src={PROFILE_PICTURE} alt="portrait of person" />
                                </motion.div>
                                <motion.div className="pt-2 d-flex justify-content-between align-items-center" initial="initial" animate="animate" exit="exit" variants={links}>

                                    <motion.div variants={link} className="social-link">
                                        <a className="text-white" href="https://www.linkedin.com/in/oisintohak/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                    </motion.div>
                                    <motion.div variants={link} className="social-link">
                                        <a className="text-white" href="https://github.com/oisintohak" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                    </motion.div>
                                    <motion.div variants={link} className="py-1 px-2 border border-3 border-white d-inline-block rounded-pill download-link">
                                        <a className="text-white" href={CV} target="_blank" rel="noopener noreferrer" download="Oisin_Tohak_CV"><FaFileDownload />CV</a>
                                    </motion.div>
                                </motion.div>
                            </div>

                            <div className="col-auto col-lg-6 py-4 me-auto text-white">
                                <motion.p variants={text}>
                                    Hi, I'm <motion.span variants={highlight} className="fs-4 fw-bold text-orange">Oisín Tohak</motion.span>, a <motion.span variants={highlight} className="fs-4 fw-bold text-orange">Full Stack Web Developer</motion.span> with a passion for music and travel. I'm currently completing a Diploma in Software Development at Code Institute.
                                </motion.p>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </IconContext.Provider>
        </div>
    )
}