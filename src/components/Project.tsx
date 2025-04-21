import React from "react";

import opticus01 from '../assets/images/opticus-01.png';
import opticus02 from '../assets/images/opticus-02.png';
import opticus03 from '../assets/images/opticus-03.png';
import opticus04 from '../assets/images/opticus-04.png';
import opticus05 from '../assets/images/opticus-05.png';
import opticus06 from '../assets/images/opticus-06.png';
import opticus07 from '../assets/images/opticus-07.png';
import opticus08 from '../assets/images/opticus-08.png';
import opticus09 from '../assets/images/opticus-09.png';
import tune01 from '../assets/images/tune-01.png';
import tune02 from '../assets/images/tune-02.png';
import tune03 from '../assets/images/tune-03.png';
import tune04 from '../assets/images/tune-04.png';
import tune05 from '../assets/images/tune-05.png';
import tune06 from '../assets/images/tune-06.png';
import tune07 from '../assets/images/tune-07.png';
import ey04 from '../assets/images/ey-04.png';
import comcast01 from '../assets/images/comcast-01.png';
import marketful01 from '../assets/images/marketful-01.png';
import omega01 from '../assets/images/omega-01.png';
import people01 from '../assets/images/people-01.png';
import shipmate01 from '../assets/images/shipmate-01.png';
import victiv01 from '../assets/images/victiv-01.png';
import upstock01 from '../assets/images/upstock-01.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Case Study</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.ey.com/en_us/services/consulting/cognistreamer" target="_blank" rel="noreferrer"><img src={ey04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.ey.com/en_us/services/consulting/cognistreamer" target="_blank" rel="noreferrer"><h2>EY</h2></a>
                <p>Did UX strategy, software architecture consulting, and UI design for EY’s digital transformation business unit. We redesigned how customer data is shared between multiple applications.</p>
            </div> 
            <div className="project">
                <a href="https://www.ey.com/en_us/services/consulting/cognistreamer" target="_blank" rel="noreferrer"><img src={upstock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.ey.com/en_us/services/consulting/cognistreamer" target="_blank" rel="noreferrer"><h2>EY</h2></a>
                <p>Completely redesigned and upgraded a new frontend for an employee incentive platform.</p>
            </div>
            <div className="project">
                <a href="https://www.shipmatefulfillment.com/" target="_blank" rel="noreferrer"><img src={shipmate01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.shipmatefulfillment.com/" target="_blank" rel="noreferrer"><h2>Shipmate</h2></a>
                <p>Designed and built a brand new platform for shipping and fulfillment logistics.</p>
            </div>
            <div className="project">
                <a href="https://omega.ngo/" target="_blank" rel="noreferrer"><img src={omega01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://omega.ngo/" target="_blank" rel="noreferrer"><h2>Omega</h2></a>
                <p>Completely rebranded and redesigned the logo and website for a cybersecurity and IT infrastructure company called Omega.</p>
            </div>
            <div className="project">
                <a href="https://www.peoplemetrics.com/" target="_blank" rel="noreferrer"><img src={people01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.peoplemetrics.com/" target="_blank" rel="noreferrer"><h2>People Metrics</h2></a>
                <p>Completely redesigned and upgraded the frontend for a customer experience data collection and survey company. This included a new data visualization dashboard and case management system and with new branding and logo.</p>
            </div>
            <div className="project">
                <a href="https://www.peoplemetrics.com/" target="_blank" rel="noreferrer"><img src={victiv01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.peoplemetrics.com/" target="_blank" rel="noreferrer"><h2>Victiv</h2></a>
                <p>We built the frontend from the ground up for a sports betting platform specializing in daily fantasy similar to Draft Kings. We built realtime data visualization for live games. The company was sold to Poker Stars and platform rebranded to Player Stars.</p>
            </div>
            <div className="project">
                <a href="https://www.opticus.ai/" target="_blank" rel="noreferrer"><img src={opticus01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.opticus.ai/" target="_blank" rel="noreferrer"><h2>Opticus</h2></a>
                <p>Designed and built a comprehensive insurance management platform from the ground up. We did the UI/UX, frontend, and backend for a new life management portal for insurance brokers, financial advisors, and family offices.</p>
            </div>
            <div className="project">
                <a href="https://business.comcast.com/" target="_blank" rel="noreferrer"><img src={comcast01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://business.comcast.com/" target="_blank" rel="noreferrer"><h2>ComCast</h2></a>
                <p>We built a design system and component library for use with 40+ internal applications used to manage internet and TV services for Comcast.</p>
            </div>
            <div className="project">
                <a href="https://marketful.com/" target="_blank" rel="noreferrer"><img src={marketful01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://marketful.com/" target="_blank" rel="noreferrer"><h2>Marketful</h2></a>
                <p>Developed a new brand and logo and designed a new UI/UX frontend for a marketing platform that provides tools for SEO keyword searches and demographics.</p>
            </div>
            <div className="project">
                <a href="https://tune.fm/" target="_blank" rel="noreferrer"><img src={tune01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://tune.fm/" target="_blank" rel="noreferrer"><h2>Tune FM</h2></a>
                <p>Designed a new splash landing page for a web3 music streaming platform in the cryptocurrency space that entices new users to join and discover new music.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;