import {
  RiLinkedinBoxLine,
  RiGithubLine,
  RiFacebookBoxLine,
  RiDownloadLine
} from 'react-icons/ri';

import { Slide } from "react-awesome-reveal";

import ai_portrait from '../images/ai_portrait.png';
import resume from '../images/Tomas_Resume.pdf'


const Home = () => {
  return (
    /* ==================== HOME ==================== */
    <section className="home section" id="home">
      <div className="home_container container grid section_border">
        {/* ==================== HOME 1 ==================== */}
        <Slide direction="down" triggerOnce="true" duration="2000">
          <div className="home_data grid">
            <h1 className="home_title">
              Let's take web development to the next level!
            </h1>

            <div className="home_portrait-container grid">
              <div className="home-ai-portrait">
                <img src={ai_portrait} alt="home ai-portrait" />
              </div>
            </div>

            <ul className="home_social">
              <a
                href="https://www.linkedin.com/in/tomas-%C5%A1pigelskis-6ab99524b/"
                target="_blank"
                className="home_social-link"
              >
                <RiLinkedinBoxLine />
              </a>

              <a
                href="https://github.com/TomasSP1"
                target="_blank"
                className="home_social-link"
              >
                <RiGithubLine />
              </a>

              <a href="https://www.facebook.com/Phobusa.Deimusa" target="_blank" className="home_social-link">
                <RiFacebookBoxLine />
              </a>
            </ul>
          </div>
        </Slide>

        {/* ==================== HOME 2 ==================== */}
        <Slide direction="up" triggerOnce="true" duration="2000">
          <div className="home_info">
            <div>
              <h3 className="home_info-title">INTRO</h3>

              <div className="home_info-description">
                <p>
                  &emsp; From streamlining work processes to igniting a passion,
                  programming has taken me on a journey that I never could have
                  imagined. What began as a means to simplify tasks, quickly
                  evolved into a beloved hobby, and eventually, a full-blown
                  passion.
                </p>
              </div>

              <a className='resume_link' href={} download='Resume'>
                Resume <RiDownloadLine className='resume-submit-logo' />
              </a>

            </div>

          </div>
        </Slide>

      </div>
    </section>
  );
};

export default Home
