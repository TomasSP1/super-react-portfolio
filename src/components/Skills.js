import { frontSkills, backSkills } from "../Data/skillsData";

import { Slide } from "react-awesome-reveal";

import { RiDatabase2Line, RiCodeSSlashFill } from 'react-icons/ri';

const Skills = () => {
    return (
        /* ==================== SKILLS ==================== */
        <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My programming skills</span>

            <div className="skills_container container grid section_border">

                {/* ==================== FRONTEND SKILLS ==================== */}
                <Slide direction="left" triggerOnce="true" duration="2000">
                    <div className="skills_content">
                        <h3 className="skills_title">
                            <RiCodeSSlashFill className="skills-title-logo" /> Frontend Developer
                        </h3>

                        <div className="skills_info">

                            {frontSkills.map((frontSkill, index) => (
                                <div className="skills_data" key={index + 1}>
                                    <div className="skills_img-container">
                                        <img src={frontSkill.image} alt="skills image" />
                                    </div>
                                    <h3 className="skills_name">{frontSkill.name}</h3>
                                    <span className="skills_subtitle">{frontSkill.subtitle}</span>
                                </div>
                            ))}

                        </div>
                    </div>
                </Slide>

                {/* ==================== BACKEND SKILLS ==================== */}
                <Slide direction="right" triggerOnce="true" duration="2000">
                    <div className="skills_content">
                        <h3 className="skills_title">
                            <RiDatabase2Line className="skills-title-logo" /> Backend Developer
                        </h3>

                        <div className="skills_info">

                            {backSkills.map((backSkill, index) => (
                                <div className="skills_data" key={index + 1}>
                                    <div className="skills_img-container">
                                        <img src={backSkill.image} alt="skills image" />
                                    </div>
                                    <h3 className="skills_name">{backSkill.name}</h3>
                                    <span className="skills_subtitle">{backSkill.subtitle}</span>
                                </div>
                            ))}

                        </div>
                    </div>
                </Slide>
            </div>

        </section>
    );
};

export default Skills;