// import Swiper core and required modules
import projects from '../Data/projectsData';
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Fade } from "react-awesome-reveal";

import { RiArrowRightLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';


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

                        {/* ==================== PROJECTS ==================== */}
                        {projects.map((project, index) => (
                            <SwiperSlide key={index + 1}>
                                <div className="projects_content">
                                    <img src={project.image} alt={project.title} className="projects_img" />

                                    <div>
                                        <h1 className="projects_title">{project.title}</h1>

                                        <a href={project.link} target="_blank" className="projects_button">
                                            View demo <RiArrowRightLine className='viev-demo-btn' />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

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