import React from 'react';
import './About.css';
import Title from '../Title/Title';
import aboutPhoto from '../../assets/about-img.avif'; // Adjust the path as needed

const About = () => {
  const skills = [
    { name: 'HTML & CSS', level: '90%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'React JS', level: '80%' },
    { name: 'Java', level: '75%' },
    { name: 'MySQL', level: '70%' },
    { name: 'MongoDB', level: '65%' }
  ];

  return (
    <section className='about' id='about'>
      <Title className='title' title="About Me" subTitle="Get to know about me" />
      <div className="about-content">
        {/* <div className="about-image">
          <img src={aboutPhoto} alt="About Me" />
        </div> */}
        <div className="about-text">
          <p>
            Hi, I'm Siddharth, a passionate B.Tech Computer Science student at RP Sharma College.
            With a strong foundation in programming, problem-solving, and software development,
            I am actively honing my skills in full-stack development to build scalable, user-friendly,
            and innovative web applications.
            I thrive on turning ideas into reality through code, and I enjoy working on both the front-end and back-end aspects of development.
            My toolkit includes technologies like HTML, CSS, JavaScript, React, MySQL, MongoDB, and more.
            I’m also exploring modern frameworks and tools to stay ahead in the ever-evolving tech landscape.
            When I’m not coding, you’ll find me solving problems on platforms like LeetCode, or learning about new technologies.
          </p>
        </div>
        <section className="skills">
          <div className="skills-column">
            {skills.slice(0, 3).map((skill, index) => (
              <div className="skill" key={index}>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="skills-column">
            {skills.slice(3).map((skill, index) => (
              <div className="skill" key={index}>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;