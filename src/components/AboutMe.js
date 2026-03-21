import "../styles/AboutMe.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import store from "../assets/store.jpeg";
import volcano_guate from "../assets/volcano_guatemala.jpeg";
import wine_window from "../assets/wine_window.jpeg";
import palma from "../assets/palma.JPG";
import italy from "../assets/italy.jpeg";
import clouds from "../assets/clouds.jpeg";

const photos = [
  { src: wine_window, alt: "wine window in italy" },
  { src: volcano_guate, alt: "volcano in guatemala" },
  { src: palma, alt: "palm tree in puerto rico" },
  { src: italy, alt: "Piazzale Michelangelo" },
  { src: store, alt: "store in italy" },
  { src: clouds, alt: "Fuego volcano summit in guatemala" },
];

const isMobile = window.innerWidth < 768;

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-title">About Me</div>
      <div className="about-me-content">
        <div className="about-me-description">
          <p>
            I'm currently a <span className="highlight">Software Engineer</span>{" "}
            at <span className="highlight">Lockheed Martin Skunk Works</span>,
            where I've been building high-performance systems in C++ and
            optimizing data messaging structures for performance-critical
            applications.
          </p>
          <p>
            Here are some of the technologies I've been working with recently:
          </p>
          <div className="tech-stack">
            <div className="tech-item">
              <i className="devicon-cplusplus-plain colored"></i>
            </div>
            <div className="tech-item">
              <i className="devicon-python-plain-wordmark colored"></i>
            </div>
            <div className="tech-item">
              <i className="devicon-typescript-plain colored"></i>
            </div>
            <div className="tech-item">
              <i className="devicon-react-original-wordmark colored"></i>
            </div>
            <div className="tech-item">
              <i className="devicon-docker-plain-wordmark colored"></i>
            </div>
            <div className="tech-item">
              <i className="devicon-grpc-plain colored"></i>
            </div>
          </div>
          <p>
            Outside of work, I love being outdoors chasing the sun and traveling
            to high altitude hikes. I'm also into graphic design and
            photography.
          </p>
          <p>Here are some of my recent pictures!</p>
        </div>
        <div className="carousel-container">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1.5}
            centeredSlides={true}
            loop={true}
            pagination={isMobile ? false : { clickable: true }}
            className="photo-swiper"
          >
            {photos.map((photo, index) => (
              <SwiperSlide key={index}>
                <img src={photo.src} alt={photo.alt} className="swiper-photo" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
