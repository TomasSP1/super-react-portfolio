// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { RiArrowRightLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import project1 from '../assets/img/project1.png';
import project2 from '../assets/img/project2.png';
import project3 from '../assets/img/project3.png';
import project4 from '../assets/img/project4.png';
import project5 from '../assets/img/project5.png';
import project6 from '../assets/img/project6.png';
import project7 from '../assets/img/project7.png';


const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">My favorite projects</span>

            <div className="container section__border">
                <Swiper
                    className="projects__container swiper"
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
                    <SwiperSlide>
                        <div className="projects__content">
                            <img src={project1} alt="projects image" className="projects__img" />

                            <div>
                                <h1 className="projects__title">Modern e-shop</h1>

                                <a href="https://e-shop-orcin.vercel.app/" className="projects__button">
                                    View demo <RiArrowRightLine />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="projects__content">
                            <img src={project2} alt="projects image" className="projects__img" />

                            <div>
                                <h1 className="projects__title">Restaurant menu</h1>

                                <a href="https://meniu-project.vercel.app/" className="projects__button">
                                    View demo <RiArrowRightLine />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="projects__content">
                            <img src={project3} alt="projects image" className="projects__img" />

                            <div>
                                <h1 className="projects__title">Advertisement page</h1>

                                <a href="https://advertisment-project.vercel.app/" className="projects__button">
                                    View demo <RiArrowRightLine />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="projects__content">
                            <img
                                src={project4}
                                alt="projects image"
                                className="projects__img"
                            />

                            <div>
                                <h1 className="projects__title">Simple countries filter</h1>

                                <a
                                    href="https://filtering-countries-using-javascript.vercel.app/"
                                    className="projects__button"
                                >
                                    View demo <RiArrowRightLine />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="projects__content">
                            <img src={project5} alt="projects image" className="projects__img" />

                            <div>
                                <h1 className="projects__title">Advertisement page</h1>

                                <a href="https://advertisment-project.vercel.app/" className="projects__button">
                                    View demo <RiArrowRightLine />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="projects__content">
                            <img src={project6} alt="projects image" className="projects__img" />

                            <div>
                                <h1 className="projects__title">Advertisement page</h1>

                                <a href="https://advertisment-project.vercel.app/" className="projects__button">
                                    View demo <RiArrowRightLine />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="projects__content">
                            <img src={project7} alt="projects image" className="projects__img" />

                            <div>
                                <h1 className="projects__title">Advertisement page</h1>

                                <a href="https://advertisment-project.vercel.app/" className="projects__button">
                                    View demo <RiArrowRightLine />
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
        </section>
    );
};

export default Projects;