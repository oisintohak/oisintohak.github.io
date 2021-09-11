import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { NavLink } from 'react-router-dom';
import { IconContext } from "react-icons";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiReact, SiPython, SiFlask, SiDjango, SiLinkedin, SiGithub } from "react-icons/si";
import Navbar from './NavBar';
import Loader from './Loader';
import SkillsIcon from './SkillsIcon';
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

    const skills = {
        initial: {
            y: 20,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                delay: isFirstMount ? 4.5 : 1.5,
                duration: 0.4,
            },
        },
        exit: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        // content wrapped with <div> to push footer to bottom of page

        <div>
            <Helmet>
                <title>Oisín Tohak | About</title>
            </Helmet>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: "2em", className: "react-icons" }}>
                {isFirstMount && <Loader />}
                <Navbar />
                <div>
                    <motion.div className="container h-100" initial="initial" animate="animate" exit="exit" variants={container}>
                        <div className="row align-items-center justify-content-center  pt-4">
                            <div className="col-auto">
                                <div className="row justify-content-center">
                                    <div className="col-auto text-center">
                                        <motion.div className="d-inline-block profile-picture" variants={picture}>
                                            <img src={PROFILE_PICTURE} alt="portrait of person" />
                                        </motion.div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <motion.div className="pt-2 d-flex justify-content-between align-items-center" initial="initial" animate="animate" exit="exit" variants={links}>
                                        <div className="col-auto text-center">

                                            <a className="text-white" href="https://www.linkedin.com/in/oisintohak/" target="_blank" rel="noopener noreferrer">
                                                <motion.div variants={link} className="profile-link">
                                                    <SkillsIcon IconName={SiLinkedin} text="LinkedIn" />
                                                </motion.div>
                                            </a>
                                        </div>
                                        <div className="col-auto text-center">

                                            <a className="text-white" href="https://github.com/oisintohak" target="_blank" rel="noopener noreferrer">
                                                <motion.div variants={link} className="profile-link">
                                                    <SkillsIcon IconName={SiGithub} text="GitHub" />
                                                </motion.div>
                                            </a>
                                        </div>
                                        <div className="col-auto text-center">

                                            <a className="text-white" href={CV} target="_blank" rel="noopener noreferrer" download="Oisin_Tohak_CV">
                                                <motion.div variants={link} className="profile-link">
                                                    <SkillsIcon IconName={BsFileEarmarkArrowDown} text="CV" />
                                                </motion.div>
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            <div className="col-auto col-md-6 py-4  text-white">
                                <motion.p variants={text}>
                                    Hi, I'm <motion.span variants={highlight} className="fs-4 fw-bold text-orange">Oisín Tohak</motion.span>, a <motion.span variants={highlight} className="fs-4 fw-bold text-orange">Full Stack Web Developer</motion.span> with a passion for music and travel. I've recently completed a Diploma in Software Development at Code Institute. You can see my projects <NavLink className="text-orange" to="/projects">here.</NavLink>
                                </motion.p>
                            </div>

                        </div>
                        <motion.div className="row justify-content-center py-4 text-white" variants={skills}>
                            <h3 className="text-center py-2 text-decoration-underline">Skills</h3>
                            <h3 className="text-center pb-3">Frontend:</h3>
                            <SkillsIcon IconName={SiHtml5} text="HTML 5" />
                            <SkillsIcon IconName={SiCss3} text="CSS 3" />
                            <SkillsIcon IconName={SiBootstrap} text="Bootstrap" />
                            <SkillsIcon IconName={SiJavascript} text="JavaScript" />
                            <SkillsIcon IconName={SiReact} text="React" />
                            <h3 className="text-center py-3">Backend:</h3>
                            <SkillsIcon IconName={SiPython} text="Python" />
                            <SkillsIcon IconName={SiFlask} text="Flask" />
                            <SkillsIcon IconName={SiDjango} text="Django" />
                        </motion.div>
                    </motion.div>
                </div>
            </IconContext.Provider>
        </div>
    )
}