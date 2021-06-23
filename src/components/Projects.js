import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion";
import { IconContext } from 'react-icons';
import { FaGithub, FaDesktop } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiReact, SiPython, SiFlask } from "react-icons/si";
import Navbar from './NavBar';
import SkillsIcon from './SkillsIcon';
import MS1 from '../images/MS1.jpg';
import MS2 from '../images/MS2.jpg';
import MS3 from '../images/MS3.jpg';
import PORTFOLIO from '../images/PORTFOLIO.jpg';

const container = {
    animate: {
        transition: {
            staggerChildren: 0.4,
        },
    },
    exit: {
        opacity: 0,
    },
};

const card = {
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

const Projects = () => {
    return (
        <>
            <Helmet>
                <title>Oisín Tohak | Projects</title>
            </Helmet>
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: "1em", className: "react-icons" }}>
                <Navbar />
                <div className="container">
                    <motion.div
                        variants={container}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="row justify-content-center pt-4">
                        <motion.div className="col-12 col-md-8 col-lg-6 pb-4" variants={card}>
                            <div className="card mx-auto p-2">
                            <img src={MS2} className="card-img-top p-1" alt="Website responsive mockup" />
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">Workout Interval Timer</h5>
                                    <p className="card-text">A Javascript interval timer with a minimal interface and interval settings.</p>
                                </div>
                                <div className="card-body text-center">
                                    <h6 className="col-auto align-middle">Built With:</h6>
                                    <div className="row justify-content-center py-3">
                                        <SkillsIcon IconName={SiHtml5} text="HTML 5" />
                                        <SkillsIcon IconName={SiCss3} text="CSS 3" />
                                        <SkillsIcon IconName={SiBootstrap} text="Bootstrap" />
                                        <SkillsIcon IconName={SiJavascript} text="JavaScript" />
                                    </div>
                                    <a href="https://github.com/oisintohak/Workout-Interval-Timer---MS2" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-orange me-2">
                                        <FaGithub /> GitHub</a>
                                    <a href="https://oisintohak.com/Workout-Interval-Timer---MS2/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-orange me-2">
                                        <FaDesktop /> Live Site</a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="col-12 col-md-8 col-lg-6 pb-4" variants={card}>
                            <div className="card mx-auto p-2">
                                <img src={MS3} className="card-img-top p-1" alt="Website responsive mockup" />
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">We Cook - Recipe Sharing</h5>
                                    <p className="card-text">
                                        A fullstack web app with that allows user to register and add recipes and discover other users' recipes.
                                </p>
                                </div>
                                <div className="card-body text-center">
                                    <h6 className="col-auto align-middle">Built With:</h6>
                                    <div className="row justify-content-center py-3">
                                        <SkillsIcon IconName={SiHtml5} text="HTML 5" />
                                        <SkillsIcon IconName={SiCss3} text="CSS 3" />
                                        <SkillsIcon IconName={SiBootstrap} text="Bootstrap" />
                                        <SkillsIcon IconName={SiPython} text="Python" />
                                        <SkillsIcon IconName={SiFlask} text="Flask" />
                                    </div>
                                    <a href="https://github.com/oisintohak/MS3" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-orange me-2">
                                        <FaGithub /> GitHub</a>
                                    <a href="https://we-cook-recipe-sharing.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm bg-orange me-2">
                                        <FaDesktop /> Live Site
                                </a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="col-12 col-md-8 col-lg-6 pb-4" variants={card}>
                            <div className="card mx-auto p-2">
                                <img src={PORTFOLIO} className="card-img-top p-1" alt="Website responsive mockup" />
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">oisintohak.com</h5>
                                    <p className="card-text">My personal portfolio page (this website).</p>
                                </div>
                                <div className="card-body text-center">
                                    <h6 className="col-auto align-middle">Built With:</h6>
                                    <div className="row justify-content-center py-3">
                                        <SkillsIcon IconName={SiBootstrap} text="Bootstrap" />
                                        <SkillsIcon IconName={SiReact} text="React" />
                                    </div>
                                    <a href="https://github.com/oisintohak/oisintohak.github.io" target="_blank" rel="noopener noreferrer"
                                        className="btn btn-sm bg-orange me-2"><FaGithub /> GitHub</a>
                                    <a href="https://oisintohak.com" target="_blank" rel="noopener noreferrer"
                                        className="btn btn-sm bg-orange me-2"><FaDesktop /> Live Site</a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="col-12 col-md-8 col-lg-6 pb-4" variants={card}>
                            <div className="card mx-auto p-2">
                                <img src={MS1} className="card-img-top p-1" alt="Website responsive mockup" />
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">The Drum School</h5>
                                    <p className="card-text">A streamlined, responsive demo website for a drum school.</p>
                                </div>
                                <div className="card-body text-center">
                                    <h6 className="col-auto align-middle">Built With:</h6>
                                    <div className="row justify-content-center py-3">
                                        <SkillsIcon IconName={SiHtml5} text="HTML 5" />
                                        <SkillsIcon IconName={SiCss3} text="CSS 3" />
                                        <SkillsIcon IconName={SiBootstrap} text="Bootstrap" />
                                    </div>
                                    <a href="https://github.com/oisintohak/The-Drum-School---MS1" target="_blank" rel="noopener noreferrer"
                                        className="btn btn-sm bg-orange me-2"><FaGithub /> GitHub</a>
                                    <a href="https://oisintohak.com/The-Drum-School---MS1/" target="_blank" rel="noopener noreferrer"
                                        className="btn btn-sm bg-orange me-2 pe-2"><FaDesktop /> Live Site</a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </IconContext.Provider>
        </>
    );
};

export default Projects;
