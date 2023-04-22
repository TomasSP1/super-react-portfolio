import { Slide } from "react-awesome-reveal";

import { RiDatabase2Line, RiCodeSSlashFill } from 'react-icons/ri';

import html from '../images/html-1.svg';
import css from '../images/css-3.svg';
import javascript from '../images/logo-javascript.svg';
import reactImg from '../images/react-2.svg';
import sass from '../images/sass-1.svg';
import bootstrap from '../images/bootstrap-5-1.svg';
import nodejsIcon from '../images/nodejs-icon.svg';
import pythonIcon from '../images/python-5.svg';
import mysqlIcon from '../images/mysql-6.svg';
import firebaseIcon from '../images/firebase-1.svg';
import mongodbIcon from '../images/mongodb-icon-1.svg';



const Skills = () => {
    return (
        /* ==================== SKILLS ==================== */
        <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My programming skills</span>

            <div className="skills_container container grid section_border">
                {/* ==================== SKILLS 1 ==================== */}
                <Slide direction="left" triggerOnce="true" duration="3000">
                    <div className="skills_content">
                        <h3 className="skills_title">
                            <RiCodeSSlashFill className="skills-title-logo"/> Frontend Developer
                        </h3>

                        <div className="skills_info">
                            <div className="skills_data">
                                <div className="skills_img-container">
                                    <img src={html} alt="skills image" />
                                </div>
                                <h3 className="skills_name">HTML</h3>
                                <span className="skills_subtitle">Intermediate</span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_img-container">
                                    <img src={css} alt="skills image" />
                                </div>
                                <h3 className="skills_name">CSS</h3>
                                <span className="skills_subtitle">Advanced</span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_img-container">
                                    <img src={javascript} alt="skills image" />
                                </div>
                                <h3 className="skills_name">JavaScript</h3>
                                <span className="skills_subtitle">Intermediate</span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_img-container">
                                    <img src={reactImg} alt="skills image" />
                                </div>
                                <h3 className="skills_name">React</h3>
                                <span className="skills_subtitle">Intermediate</span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_img-container">
                                    <img src={sass} alt="skills image" />
                                </div>
                                <h3 className="skills_name">Sass</h3>
                                <span className="skills_subtitle">Intermediate</span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_img-container">
                                    <img src={bootstrap} alt="skills image" />
                                </div>
                                <h3 className="skills_name">Bootstrap</h3>
                                <span className="skills_subtitle">Intermediate</span>
                            </div>
                        </div>
                    </div>
                </Slide>

                {/* ==================== SKILLS 2 ==================== */}
                <Slide direction="right" triggerOnce="true" duration="3000">
                    <div className="skills_content">
                        <h3 className="skills_title">
                            <RiDatabase2Line className="skills-title-logo"/> Backend Developer
                        </h3>

                        <div className="skills_info">

                            <div className="skills_data">
                                <div className="skills_img-container">
                                    <img src={nodejsIcon} alt="Nodejs icon" />
                                </div>
                                <h3 className="skills_name">Nodejs</h3>
                                <span className="skills_subtitle">Basic</span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_img-container">
                                    <img src={pythonIcon} alt="Python icon" />
                                </div>
                                <h3 className="skills_name">Python</h3>
                                <span className="skills_subtitle">Basic</span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_img-container">
                                    <img src={mysqlIcon} alt="MySQL icon" />
                                </div>
                                <h3 className="skills_name">MySQL</h3>
                                <span className="skills_subtitle">Basic</span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_img-container">
                                    <img src={firebaseIcon} alt="Firebase icon" />
                                </div>
                                <h3 className="skills_name">Firebase</h3>
                                <span className="skills_subtitle">Basic</span>
                            </div>

                            <div className="skills_data">
                                <div className="skills_img-container">
                                    <img src={mongodbIcon} alt="Mongodb icon" />
                                </div>
                                <h3 className="skills_name">Mongodb</h3>
                                <span className="skills_subtitle">Basic</span>
                            </div>

                        </div>
                    </div>
                </Slide>
            </div>

        </section>
    );
};

export default Skills;