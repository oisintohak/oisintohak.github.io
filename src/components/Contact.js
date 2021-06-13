import React from 'react';
import { Helmet } from "react-helmet";
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Navbar from './NavBar';

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

const items = {
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



const Contact = () => {
    // EMAIL JS
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'contact_form', e.target, 'user_mAnea3QFbT15oFRptm5qE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div>
            <Helmet>
                <title>Oisín Tohak | Contact</title>
            </Helmet>
            <Navbar />
            <motion.div initial="initial" animate="animate" exit="exit" variants={container} className="container">
                <motion.div variants={items} className="row justify-content-center align-items-center pt-4">
                    <div className="col-lg-8 col-xl-6 col-xxl-5">
                        <p className="text-white">To get in touch send an email to <a className="text-orange" href="mailto:mail@oisintohak.com">mail@oisintohak.com</a>, reach out to me on <a className="text-orange" href="https://www.linkedin.com/in/oisintohak/" target="_blank" rel="noopener noreferrer"><FaLinkedin />LinkedIn</a>, or just leave a message below:</p>
                    </div>
                </motion.div>
                <motion.div variants={items} className="row justify-content-center align-items-center py-4">
                    <div className="col col-lg-8 col-xl-6 col-xxl-5">
                        <form id="contact-form" className="card p-3" onSubmit={sendEmail}>
                            <h3 className="text-center mb-3">Send me a message:</h3>
                            <div className="mb-3">
                                <label htmlFor="name-input" className="form-label">*Name</label>
                                <input type="text" className="form-control" id="name-input" name="user_name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">*Email</label>
                                <input type="email" className="form-control" id="email-input" name="user_email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">*Message</label>
                                <textarea className="form-control" id="message" name="message" rows="5" required />
                            </div>

                            <div className="mx-auto mb-3 recaptcha">
                                <ReCAPTCHA sitekey="6LccLfgaAAAAANvAX0UjSg1aqKVMuF9s4FssxQW6" />
                            </div>
                            <input id="submit" type="submit" className="btn btn-lg bg-orange" value="Submit" />
                        </form>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Contact;