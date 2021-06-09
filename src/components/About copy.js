import { motion } from "framer-motion";
import Navbar from './NavBar';
import Loader from './Loader';

export default function About({ isFirstMount }) {
    const content = {
        animate: {
            transition: {
                when: "beforeChildren",
                delay: ({ isFirstMount } ? 3 : 0),
                staggerChildren: 0.2,
            }
        }
    }

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
                delay: (isFirstMount ? 3 : 0),
            },
        },
        exit: {
            opacity: 0,
            x: 80,
        },
    };

    return (
        // content wrapped to separate from footer
        <div>
            {isFirstMount && <Loader />}
            <Navbar />
            <div className="container h-100">
                <div className="row align-items-center">
                    <div className="col">
                        <motion.h2 initial="initial" animate="animate" exit="exit" variants={headings} className="text-white py-3">Oisín Tohak</motion.h2>
                        <motion.h3 initial="initial" animate="animate" exit="exit" variants={headings} className="text-white py-3">Fullstack Web Developer</motion.h3>

                    </div>
                </div>
            </div>
        </div>
    )
}