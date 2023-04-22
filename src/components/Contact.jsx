import { useState } from 'react';

import emailjs from 'emailjs-com';

import { Slide } from "react-awesome-reveal";

import { RiArrowRightUpLine, RiMailSendLine } from 'react-icons/ri';


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [project, setProject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the fields have a value
        if (name === '' || email === '' || project === '') {
            // Show message
            setMessage('Write all the input fields 📩');
            return;
        }

        // Send email
        emailjs.sendForm('service_ejn1dap', 'template_a44sdox', '#contact-form', 'IlMUZXDaD84dTnMOx')
            .then((response) => {
                // Show message
                setMessage('Message sent ✅');

                // Clear the input fields
                setName('');
                setEmail('');
                setProject('');

                // Remove message after five seconds
                setTimeout(() => {
                    setMessage('');
                }, 5000);
            })
            .catch((error) => {
                // Show error message
                alert('OOPS! SOMETHING HAS WENT WRONG...', error);
            });
    };

    return (
        /* ==================== CONTACTS ==================== */
        <section className="contact section" id="contact">
            <h2 className="section_title">Contact me</h2>
            <span className="section_subtitle">Get in touch</span>

            <div className="contact_container container grid section_border">

                {/* ==================== CONTACTS 1 ==================== */}
                <Slide direction="left" triggerOnce="true" duration="2000">
                    <div className="contact_info">
                        <div className="contact_data">
                            <span className="contact_data-title">Email</span>
                            <span className="contact_data-info">fobas0405@gmail.com</span>
                        </div>
                        <div className="contact_data">
                            <span className="contact_data-title">Whatsapp</span>
                            <span className="contact_data-info">+370 607 61 ***</span>
                            {/* <a href="#" target="_blank" className="contact__button">
                            Write me <i className="ri-arrow-right-line"></i>
                        </a> */}
                        </div>
                        <div className="contact_data">
                            <span className="contact_data-title">Messenger</span>
                            <span className="contact_data-info">Tomas SP</span>
                            {/* <a href="#" target="_blank" className="contact__button">
                            Write me <i className="ri-arrow-right-line"></i>
                        </a> */}
                        </div>
                    </div>
                </Slide>

                {/* ==================== CONTACTS 2 ==================== */}
                <Slide direction="right" triggerOnce="true" duration="2000">
                    <div className="contact_content">
                        <h3 className="contact_title">
                            <RiMailSendLine className='contact_title-logo'/> Write me a message
                        </h3>

                        <form onSubmit={handleSubmit} className="contact_form" id="contact-form">
                            <div className="contact_form-div">
                                <label className="contact_form-tag">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    placeholder="Write your name here"
                                    className="contact_form-input"
                                    id="contact-name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="contact_form-div">
                                <label className="contact_form-tag">eMail</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    placeholder="Write your email here"
                                    className="contact_form-input"
                                    id="contact-email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="contact_form-div contact_form-area">
                                <label className="contact_form-tag">Message</label>
                                <textarea
                                    name="user_project"
                                    placeholder="Write your message here"
                                    id="contact-project"
                                    className="contact_form-input"
                                    value={project}
                                    onChange={(e) => setProject(e.target.value)}
                                ></textarea>
                            </div>

                            <p className="contact_message" id="contact-message">
                                {message}
                            </p>

                            <button type="submit" translate="submit" className="contact_button">
                                Submit <RiArrowRightUpLine className='contact-submit-logo'/>
                            </button>
                        </form>
                    </div>
                </Slide>

            </div>

        </section>
    );
}

export default Contact;