import { RiLinkedinBoxLine, RiGithubLine, RiDribbbleLine } from 'react-icons/ri';



const Footer = () => {
    return (
        <footer className="footer">

                <div className="footer__container container">
                    <ul className="footer__social">
                        <a href="https://www.linkedin.com" target="_blank" className="footer__social-link">
                            <RiLinkedinBoxLine />
                        </a>
                        <a href="https://github.com" target="_blank" className="footer__social-link">
                            <RiGithubLine />
                        </a>
                        <a href="https://dribbble.com" target="_blank" className="footer__social-link">
                            <RiDribbbleLine />
                        </a>
                    </ul>
                    <span className="footer__copy">
                        &#169;2023 All rights reserved.
                    </span>
                </div>

        </footer>
    )
}

export default Footer