import { motion } from "framer-motion";
import Navbar from './NavBar';
import Loader from './Loader';

export default function About({isFirstMount}) {
    const contentWrapper = {
        animateDelayed: {
            transition: {
                delay: 3,
            },
        },
        animate: {
            transition: {
                delay: 0,
            },
        },
    };
    const variants = {
        initial: { opacity: 0, x: -80 },
        animate: {
            opacity: 1,
            x: 0,
        },
        exit: { opacity: 0, x: 80 },
    }
    return (
        <>
            {isFirstMount && <Loader />}
            <Navbar />
            <motion.div initial="initial" animate={isFirstMount ?  "animateDelayed" : "animate"} variants={contentWrapper}>
                <motion.div initial="initial" animate="animate" exit="exit" variants={variants} transition={{ duration: 0.3 }}>
                    <div className="container my-auto">
                        <div className="row flex-column justify-content-center">
                            <div className="col">
                                <h1 className="text-white py-3">Oisín Tohak</h1>
                                <h6 className="text-white py-3">Fullstack Web Developer</h6>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

        </>
    )
}