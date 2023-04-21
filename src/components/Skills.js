import { Slide } from "react-awesome-reveal";

import html from '../assets/img/html-1.svg';
import css from '../assets/img/css-3.svg';
import javascript from '../assets/img/logo-javascript.svg';
import reactImg from '../assets/img/react-2.svg';
import sass from '../assets/img/sass-1.svg';
import bootstrap from '../assets/img/bootstrap-5-1.svg';
import nodejsIcon from '../assets/img/nodejs-icon.svg';
import pythonIcon from '../assets/img/python-5.svg';
import mysqlIcon from '../assets/img/mysql-6.svg';
import firebaseIcon from '../assets/img/firebase-1.svg';
import mongodbIcon from '../assets/img/mongodb-icon-1.svg';

const Skills = () => {
    return (
        /* ==================== SKILLS ==================== */
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My programming skills</span>

            <div className="skills__container container grid section__border">
                {/* ==================== SKILLS 1 ==================== */}
                <Slide direction="left" triggerOnce="true" duration="3000">
                    <div className="skills__content">
                        <h3 className="skills__title">
                            <i className="ri-braces-line"></i> Frontend Developer
                        </h3>

                        <div className="skills__info">
                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={html} alt="skills image" />
                                </div>
                                <h3 className="skills__name">HTML</h3>
                                <span className="skills__subtitle">Intermediate</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={css} alt="skills image" />
                                </div>
                                <h3 className="skills__name">CSS</h3>
                                <span className="skills__subtitle">Advanced</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={javascript} alt="skills image" />
                                </div>
                                <h3 className="skills__name">JavaScript</h3>
                                <span className="skills__subtitle">Intermediate</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={reactImg} alt="skills image" />
                                </div>
                                <h3 className="skills__name">React</h3>
                                <span className="skills__subtitle">Intermediate</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={sass} alt="skills image" />
                                </div>
                                <h3 className="skills__name">Sass</h3>
                                <span className="skills__subtitle">Intermediate</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={bootstrap} alt="skills image" />
                                </div>
                                <h3 className="skills__name">Bootstrap</h3>
                                <span className="skills__subtitle">Intermediate</span>
                            </div>
                        </div>
                    </div>
                </Slide>

                {/* ==================== SKILLS 2 ==================== */}
                <Slide direction="right" triggerOnce="true" duration="3000">
                    <div className="skills__content">
                        <h3 className="skills__title">
                            <i className="ri-pantone-line"></i> Backend Developer
                        </h3>

                        <div className="skills__info">

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={nodejsIcon} alt="Nodejs icon" />
                                </div>
                                <h3 className="skills__name">Nodejs</h3>
                                <span className="skills__subtitle">Basic</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={pythonIcon} alt="Python icon" />
                                </div>
                                <h3 className="skills__name">Python</h3>
                                <span className="skills__subtitle">Basic</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={mysqlIcon} alt="MySQL icon" />
                                </div>
                                <h3 className="skills__name">MySQL</h3>
                                <span className="skills__subtitle">Basic</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={firebaseIcon} alt="Firebase icon" />
                                </div>
                                <h3 className="skills__name">Firebase</h3>
                                <span className="skills__subtitle">Basic</span>
                            </div>

                            <div className="skills__data">
                                <div className="skills__blob">
                                    <img src={mongodbIcon} alt="Mongodb icon" />
                                </div>
                                <h3 className="skills__name">Mongodb</h3>
                                <span className="skills__subtitle">Basic</span>
                            </div>

                        </div>
                    </div>
                </Slide>
            </div>

        </section>
    );
};

export default Skills;