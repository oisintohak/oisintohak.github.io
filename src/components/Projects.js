import React from 'react';
import { Helmet } from 'react-helmet';
import MS1 from '../images/MS1.jpg';
import MS2 from '../images/MS2.jpg';
import MS3 from '../images/MS3.jpg';
import { motion } from "framer-motion";
import Navbar from './NavBar';
import { IconContext } from 'react-icons';
import { FaGithub, FaDesktop } from 'react-icons/fa';

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
            <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: "2em", className: "react-icons" }}>
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
                                    <h5 className="card-title">Workout Interval Timer</h5>
                                    <p className="card-text">A Javascript interval timer with a minimal interface and interval settings.</p>
                                </div>
                                <div className="card-body">
                                    <a href="https://github.com/oisintohak/Workout-Interval-Timer---MS2" target="_blank" rel="noopener noreferrer" className="card-link btn btn-sm bg-grey">
                                        <FaGithub /> GitHub</a>
                                    <a href="https://oisintohak.com/Workout-Interval-Timer---MS2/" target="_blank" rel="noopener noreferrer" className="card-link btn btn-sm bg-grey">
                                        <FaDesktop /> Live Site</a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="col-12 col-md-8 col-lg-6 pb-4" variants={card}>
                            <div className="card mx-auto p-2">
                                <img src={MS3} className="card-img-top p-1" alt="Website responsive mockup" />
                                <div className="card-body">
                                    <h5 className="card-title">We Cook - Recipe Sharing</h5>
                                    <p className="card-text">
                                        A fullstack web app with that allows user to register and add recipes and discover other users' recipes.
                                </p>
                                </div>
                                <div className="card-body">
                                    <a href="https://github.com/oisintohak/MS3" target="_blank" rel="noopener noreferrer" className="card-link btn btn-sm bg-grey">
                                        <FaGithub /> GitHub</a>
                                    <a href="https://we-cook-recipe-sharing.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="card-link btn btn-sm bg-grey">
                                        <FaDesktop /> Live Site
                                </a>
                                </div>
                            </div>

                        </motion.div>
                        <motion.div className="col-12 col-md-8 col-lg-6 pb-4" variants={card}>
                            <div className="card mx-auto p-2">
                                <img src={MS1} className="card-img-top p-1" alt="Website responsive mockup" />
                                <div className="card-body">
                                    <h5 className="card-title">The Drum School</h5>
                                    <p className="card-text">A streamlined, responsive demo website for a drum school.</p>
                                </div>
                                <div className="card-body">
                                    <a href="https://github.com/oisintohak/The-Drum-School---MS1" target="_blank" rel="noopener noreferrer"
                                        className="card-link btn btn-sm bg-grey"><FaGithub /> GitHub</a>
                                    <a href="https://oisintohak.github.io/Milestone-Project-1/" target="_blank" rel="noopener noreferrer"
                                        className="card-link btn btn-sm bg-grey"><FaDesktop /> Live Site</a>
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
