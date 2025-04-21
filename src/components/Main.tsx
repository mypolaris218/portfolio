import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import me from '../assets/images/me.jpg';

const Main = () => {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/mypolaris218" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kevin-liu-96553235a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Kevin Liu</h1>
          <p>Software Engineer | ex-Amazon Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/mypolaris218" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kevin-liu-96553235a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={me} alt="Avatar" />
        </div>
      </div>
    </div>
  );
}

export default Main;