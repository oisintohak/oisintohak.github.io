import React from 'react';
import MS1 from '../images/MS1.jpg';
import MS2 from '../images/MS2.jpg';
import MS3 from '../images/MS3.jpg';
import { motion } from "framer-motion";
import Navbar from './NavBar';
import {FaGithub} from "react-icons/fa"
import {FaDesktop} from "react-icons/fa"


const container = {
    animate: {
        transition: { staggerChildren: 0.6 },
    },
};


const card = {
    initial: {
        opacity: 0,
        x: -60,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
    exit: {
        opacity: 0,
        x: 60,
    },
};
const Projects = () => {

    return (
        <>
            <Navbar />
            <div className="container">
                <motion.div animate="animate" variants={container} className="row pt-4 justify-content-center">
                    <motion.div className="col-12 col-md-8 col-lg-6 pb-4" initial="initial" animate="animate" exit="exit" variants={card}>
                        <div className="card mx-auto p-2">
                            <img src={MS1} className="card-img-top p-1" alt="Website responsive mockup" />
                            <div className="card-body">
                                <h5 className="card-title">The Drum School</h5>
                                <p className="card-text">A streamlined, responsive demo website for a drum school.</p>
                            </div>
                            <div className="card-body">
                                <a href="https://github.com/oisintohak/The-Drum-School---MS1"
                                    className="card-link btn btn-sm bg-grey"><FaGithub />GitHub</a>
                                <a href="https://oisintohak.github.io/Milestone-Project-1/"
                                    className="card-link btn btn-sm bg-grey"><FaDesktop />Live
                        Site</a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="col-12 col-md-8 col-lg-6 pb-4" initial="initial" animate="animate" exit="exit" variants={card}>
                        <div className="card mx-auto p-2">
                            <img src={MS2} className="card-img-top p-1" alt="Website responsive mockup" />
                            <div className="card-body">
                                <h5 className="card-title">Workout Interval Timer</h5>
                                <p className="card-text">A Javascript interval timer with a minimal interface and
                                interval
                        settings.</p>
                            </div>
                            <div className="card-body">
                                <a href="https://github.com/oisintohak/Workout-Interval-Timer---MS2"
                                    className="card-link btn btn-sm bg-grey"><i
                                        className="fab fa-github pe-1"></i>GitHub</a>
                                <a href="https://oisintohak.com/Workout-Interval-Timer---MS2/"
                                    className="card-link btn btn-sm bg-grey"><i className="fas fa-desktop pe-1"></i>Live
                        Site</a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="col-12 col-md-8 col-lg-6 pb-4" initial="initial" animate="animate" exit="exit" variants={card}>
                        <div className="card mx-auto p-2">
                            <img src={MS3} className="card-img-top p-1" alt="Website responsive mockup" />
                            <div className="card-body">
                                <h5 className="card-title">We Cook - Recipe Sharing</h5>
                                <p className="card-text">A fullstack web app with that allows user to register and add
                        recipes and discover other users' recipes.</p>
                            </div>
                            <div className="card-body">
                                <a href="https://github.com/oisintohak/MS3" className="card-link btn btn-sm bg-grey">
                                    <i className="fab fa-github pe-1"></i>GitHub
                    </a>
                                <a href="https://we-cook-recipe-sharing.herokuapp.com/" className="card-link btn btn-sm bg-grey">
                                    <i className="fas fa-desktop pe-1"></i>Live Site
                    </a>
                            </div>
                        </div>

                    </motion.div>
                </motion.div>
            </div>
        </>
    )
};

export default Projects;