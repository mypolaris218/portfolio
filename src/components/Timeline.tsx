import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

type career = { 
  title: string;
  company: string;
  date: string;
  description: string;
}

const careers: career[] = [
  {
    title: "Lead Software Engineer",
    company: "Practice AI",
    date: "JUN 2024 - PPRESENT",
    description: "Lead Developer, GenAI/LLM, Project Management, Business Development",
  },
  {
    title: "Senior Full Stack Engineer",
    company: "Webflow",
    date: "APR 2023 - APR 2024",
    description: "Frontend Development, Backend Development, User Experience, Team Leading",
  },
  {
    title: "Senior Full Stack Engineer",
    company: "Quora",
    date: "MAR 2021 - MAR 2023",
    description: "Full-stack Development, API Development, User Experience",
  },
  {
    title: "Full Stack Engineer",
    company: "Discover Financial Services",
    date: "OCT 2019 - 01 2021",
    description: "Automation, Data Governance, Statistical Analysis",
  },
  {
    title: "Full Stack Engineer",
    company: "Amazon",
    date: "MAY 2017 - JUL 2019",
    description: "JavaScript, iOS development, improving internal AWS services",
  },
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {
            careers.map((career, index) =>           
              <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date={career.date}
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{career.title}</h3>
              <h4 className="vertical-timeline-element-subtitle"><i>{career.company}</i> </h4>
              <p>
                { career.description}
              </p>
              </VerticalTimelineElement>
            )
          }
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;