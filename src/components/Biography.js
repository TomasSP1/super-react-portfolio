import React from 'react'

import programmer1 from '../assets/img/programmer1.jpg';

const Biography = () => {
    return (
        /* ==================== BIOGRAPHY ==================== */
        <section className="biography section" id="biography">
            <h2 className="section__title">Biography</h2>
            <span className="section__subtitle">Journey of my life</span>
            <div className="biography__container container grid section__border">
                {/* ==================== BIOGRAPHY 1 ==================== */}
                <div className="biography__content">

                    <div className="biography__info">

                        <div className="biography__data">
                            <img src={programmer1} alt="programmer1" />
                        </div>

                    </div>
                </div>

                {/* ==================== BIOGRAPHY 2 ==================== */}
                <div className="biography__content">

                    <div className="biography__info">

                        <h3 className="home__info-title">
                            ABOUT
                        </h3>

                        <div className="biography__info-description">
                            <p>&emsp; After completing my studies, I was drawn to the intriguing world of law
                                enforcement. Climbing the ranks to become a chief investigator, I found my passion lay
                                in cyber prevention. Little did I know, it was in this role that I would discover my
                                love for programming. Starting with Python, my initial goal was to streamline everyday
                                tasks. However, as I delved deeper into programming, I was captivated by JavaScript and
                                its ability to create stunning web pages. Thus began my quest to master web development.
                                <br />
                                <br />
                                &emsp; With over a decade of experience in law enforcement, I honed essential skills such as
                                critical thinking and problem-solving. A rapid learner by nature, I never shy away from
                                new challenges and possess an insatiable thirst for knowledge. In recent times, I have
                                focused my attention on front-end programming and have become quite adept at it.
                                Programming ignites my passion, and I am committed to forging a career in this
                                fascinating field.</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Biography