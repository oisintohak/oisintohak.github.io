import { motion } from "framer-motion";
import Navbar from './NavBar';
import Loader from './Loader';

export default function About({ isFirstMount }) {
    const container = {
        animate: {
            transition: {
                staggerChildren: 0.4,
                delayChildren: isFirstMount ? 3 : 0,
            },
        },
        exit: {
            opacity: 0,
        },
    };
    
    const headings = {
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
        }
    };

    return (
        // content wrapped to separate from footer
        <div>
            {isFirstMount && <Loader />}
            <Navbar />
            <div className="container h-100">
                <div className="row align-items-center">
                    <motion.div initial="initial" animate="animate" exit="exit" variants={container} className="col" >
                        <motion.h2 variants={headings} className="text-white py-3">Oisín Tohak</motion.h2>
                        <motion.h3 variants={headings} className="text-white py-3">Fullstack Web Developer</motion.h3>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}