import { Fade } from "react-awesome-reveal";

import { RiLinkedinBoxLine, RiGithubLine, RiFacebookBoxLine } from 'react-icons/ri';


const Footer = () => {
    return (
        /* ==================== FOOTER ==================== */
        <footer className="footer">
            <Fade triggerOnce="true" duration="3000">
                <div className="footer_container container">
                    <ul className="footer_social">
                        <a href="https://www.linkedin.com" target="_blank" className="footer_social-link">
                            <RiLinkedinBoxLine />
                        </a>
                        <a href="https://github.com/TomasSP1" target="_blank" className="footer_social-link">
                            <RiGithubLine />
                        </a>
                        <a href="https://www.facebook.com/Phobusa.Deimusa" target="_blank" className="footer_social-link">
                            <RiFacebookBoxLine />
                        </a>
                    </ul>
                    <span className="footer_copy">
                        &#169;2023 All rights reserved.
                    </span>
                </div>
            </Fade>
        </footer>
    )
}

export default Footer