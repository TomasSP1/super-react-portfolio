// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Fade } from "react-awesome-reveal";

import { RiArrowRightLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import project4 from '../images/project4.png';
import project5 from '../images/project5.png';
import project6 from '../images/project6.png';
import project7 from '../images/project7.png';


const Projects = () => {
    return (
        /*  ==================== PROJECTS ====================  */
        <section className="projects section" id="projects">
            <h2 className="section_title">Projects</h2>
            <span className="section_subtitle">My favorite projects</span>

            <Fade triggerOnce="true" duration="3000">
                <div className="container section_border">
                    <Swiper
                        className="projects_container swiper"
                        modules={[Navigation, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{ el: '.swiper-pagination' }}
                        breakpoints={{
                            1200: {
                                slidesPerView: 2,
                                spaceBetween: -56,
                            },
                        }}>

                        {/* ==================== PROJECT 1 ==================== */}
                        <SwiperSlide>
                            <div className="projects_content">
                                <img src={project1} alt="projects image" className="projects_img" />

                                <div>
                                    <h1 className="projects_title">Modern e-shop</h1>

                                    <a href="https://e-shop-orcin.vercel.app/" className="projects_button">
                                        View demo <RiArrowRightLine className='viev-demo-btn'/>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* ==================== PROJECT 2 ==================== */}
                        <SwiperSlide>
                            <div className="projects_content">
                                <img src={project2} alt="projects image" className="projects_img" />

                                <div>
                                    <h1 className="projects_title">Restaurant menu</h1>

                                    <a href="https://meniu-project.vercel.app/" className="projects_button">
                                        View demo <RiArrowRightLine className='viev-demo-btn'/>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* ==================== PROJECT 3 ==================== */}
                        <SwiperSlide>
                            <div className="projects_content">
                                <img src={project3} alt="projects image" className="projects_img" />

                                <div>
                                    <h1 className="projects_title">Advertisement page</h1>

                                    <a href="https://advertisment-project.vercel.app/" className="projects_button">
                                        View demo <RiArrowRightLine className='viev-demo-btn'/>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* ==================== PROJECT 4 ==================== */}
                        <SwiperSlide>
                            <div className="projects_content">
                                <img
                                    src={project4}
                                    alt="projects image"
                                    className="projects_img"
                                />

                                <div>
                                    <h1 className="projects_title">Simple countries filter</h1>

                                    <a
                                        href="https://filtering-countries-using-javascript.vercel.app/"
                                        className="projects_button"
                                    >
                                        View demo <RiArrowRightLine className='viev-demo-btn'/>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* ==================== PROJECT 5 ==================== */}
                        <SwiperSlide>
                            <div className="projects_content">
                                <img src={project5} alt="projects image" className="projects_img" />

                                <div>
                                    <h1 className="projects_title">API movie search engine</h1>

                                    <a href="https://new-movie-search-engine.vercel.app/" className="projects_button">
                                        View demo <RiArrowRightLine className='viev-demo-btn'/>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* ==================== PROJECT 6 ==================== */}
                        <SwiperSlide>
                            <div className="projects_content">
                                <img src={project6} alt="projects image" className="projects_img" />

                                <div>
                                    <h1 className="projects_title">Form with Local storage</h1>

                                    <a href="https://form-with-local-storage.vercel.app/" className="projects_button">
                                        View demo <RiArrowRightLine className='viev-demo-btn'/>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* ==================== PROJECT 7 ==================== */}
                        <SwiperSlide>
                            <div className="projects_content">
                                <img src={project7} alt="projects image" className="projects_img" />

                                <div>
                                    <h1 className="projects_title">Simple case converter</h1>

                                    <a href="https://case-converter-three.vercel.app/" className="projects_button">
                                        View demo <RiArrowRightLine className='viev-demo-btn'/>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Swiper arrows */}
                        <div className="swiper-button-next">
                            <RiArrowRightSLine />
                        </div>
                        <div className="swiper-button-prev">
                            <RiArrowLeftSLine />
                        </div>

                        {/* Swiper pagination */}
                        <div className="swiper-pagination"></div>
                    </Swiper>
                </div>
            </Fade>

        </section>
    );
};

export default Projects;