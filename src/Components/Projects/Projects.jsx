import React from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Title from "../Title/Title";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  {
    name: "E-Commerce Website",
    tech: "React, Node.js, MongoDB",
    image: "https://via.placeholder.com/250",
    description: "A full-stack e-commerce site with user authentication & payments.",
    link: "https://your-ecommerce-link.com",
  },
  {
    name: "AI Chatbot",
    tech: "Python, OpenAI API",
    image: "https://via.placeholder.com/250",
    description: "An AI-powered chatbot for customer support and automation.",
    link: "https://your-ai-chatbot-link.com",
  },
  {
    name: "Portfolio Website",
    tech: "React, Swiper.js, CSS",
    image: "https://via.placeholder.com/250",
    description: "A dynamic and interactive personal portfolio site.",
    link: "https://your-portfolio-link.com",
  },
  {
    name: "Task Manager App",
    tech: "Flutter, Firebase",
    image: "https://via.placeholder.com/250",
    description: "A mobile app to manage daily tasks with cloud sync.",
    link: "https://your-task-manager-link.com",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Title className="title" title="My Projects" subTitle="Some of my best work" />

      <div className="projects-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={1.2}
          centeredSlides={true}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-card">
                <img src={project.image} alt={project.name} />
                <h3>{project.name}</h3>
                <p className="tech">{project.tech}</p>
                <p className="description">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="view-btn">View</button>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
