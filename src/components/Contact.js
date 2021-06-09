import React from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import Navbar from './NavBar';


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

    // FORM ANIMATION
    const form = {
        initial: {
            opacity: 0,
            x: -60,
            transition: {
                duration: 0.3,
            },
        },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 60 },
    };

    return (
        <>
            <Navbar />
            <motion.div className="container" initial="initial" animate="animate" exit="exit" variants={form} >
                    <div className="row justify-content-center pt-4">
                        <div className="col col-lg-8 col-xl-6 col-xxl-5">
                            <form id="contact-form" className="card p-3" onSubmit={sendEmail}>
                                <h3 className="text-center mb-3">Send me a message:</h3>
                                <div className="mb-3">
                                    <label htmlFor="name-input" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name-input" name="user_name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email-input" name="user_email"
                                        placeholder="name@example.com" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" name="message" rows="5" required />
                                </div>

                                <div className="mx-auto mb-3 recaptcha">
                                    <ReCAPTCHA sitekey="6LccLfgaAAAAANvAX0UjSg1aqKVMuF9s4FssxQW6" />
                                    {/* <div className="g-recaptcha text-center d-inline-block mx-auto" data-sitekey="6LccLfgaAAAAANvAX0UjSg1aqKVMuF9s4FssxQW6"></div> */}
                                </div>
                                <input id="submit" type="submit" className="btn btn-primary" value="Submit" />
                            </form>
                        </div>
                    </div>
            </motion.div>
        </>
    )
}

export default Contact;