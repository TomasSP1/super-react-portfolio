import { RiLinkedinBoxLine, RiGithubLine, RiDribbbleLine } from 'react-icons/ri';
import perfil from '../assets/img/perfil.png';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid section__border">
        <div className="home__data grid">
          <h1 className="home__title">
            Let's take web development to the next level!
          </h1>

          <div className="home__blob grid">
            <div className="home__perfil">
              <img src={perfil} alt="home perfil" />
            </div>
          </div>

          <ul className="home__social">
            <a
              href="https://www.linkedin.com/in/tomas-%C5%A1pigelskis-6ab99524b/"
              target="_blank"
              className="home__social-link"
            >
              <RiLinkedinBoxLine />
            </a>

            <a
              href="https://github.com/TomasSP1"
              target="_blank"
              className="home__social-link"
            >
              <RiGithubLine />
            </a>

            <a href="#" target="_blank" className="home__social-link">
              <RiDribbbleLine />
            </a>
          </ul>
        </div>

        <div className="home__info">
          <div>
            <h3 className="home__info-title">INTRO</h3>

            <div className="home__info-description">
              <p>
                &emsp; From streamlining work processes to igniting a passion,
                programming has taken me on a journey that I never could have
                imagined. What began as a means to simplify tasks, quickly
                evolved into a beloved hobby, and eventually, a full-blown
                passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home