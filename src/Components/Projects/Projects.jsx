import React from 'react'
import './Projects.css'
import Title from '../Title/Title';
// import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
// import arrow_icon from '../../assets/arrow_icon.svg';

const Projects = () => {
  return (
    <div className='project'>
      <div className='project-title'>
        <Title className='title' title="My Projects" subTitle="My Work" />
        {/* <img src={theme_pattern} alt='theme pattern'/> */}
      </div>
      <div className="project-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="project-item">
            <img src={work.w_img} alt={`project ${index + 1}`}/>
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        {/* <img src={arrow_icon} alt=''/> */}
      </div>
    </div>
  )
}

export default Projects