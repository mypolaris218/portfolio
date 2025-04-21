import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faCloud, faDatabase, faMobile, faMobileAndroid } from "@fortawesome/free-solid-svg-icons";
import { title } from "process";

const labelsFirst = [
    "TypeScript",
    "JavaScript",
    "React",
    "Next",
    "Angular",
    "Vue",
    "Node",
    "Express",
    "NestJS",
    "Koa",
    "jQuery",
    "SASS/SCSS/LESS",
    "Python",
    "Django",
    "FastAPI",
    "Flask",
    "MongoDB",
    "SQL",
    "MySQL",
    "PostgreSQL",
];

const labelsMobile = [
    "React Native",
    "Flutter",
    "Swift",
    "Java",
    "Kotlin",
    "Objective C",
    "JetPack Compose",
    "SwiftUI",
    "TestFlight",
    "New Relic",
    "Expo",
    "Xcode",
    "Push Notification"
];

const labelsCloudPlatfoms = [
    "AWS",
    "EC2",
    "ECS",
    "EKS",
    "lambda",
    "API Gateway",
    "Congnito",
    "S3",
    "DynamoDB",
    "Aurora",
    "Elastic Block Store",
    "VPC",
    "CloudFront ",
    "CloudFormation",
    "CloudWatch",
    "GCP",
    "GKE",
    "GCS",
    "Cloud Run",
    "Cloud Functions",
    "Cloud SQL",
    "Cloud Storage",
    "Firebase",
    "Heroku",
    "Digital Ocean",
    "Netlify",
    "Railway",
    "Render",
    "Linode",
];

const labelDataBase = [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "Redis",
    "Neo4j",
    "Elasticsearch",
    "Cassandra",
    "CouchDB",
    "PouchDB",
    "DynamoDB",
    "Firebase Realtime Database",
    "InfluxDB",
    "Couchbase",

];

const labelsDevOps = [
    "CircleCI",
    "Jenkins",
    "GitLab CI/CD",
    "Travis CI",
    "Bitbucket Pipelines",
    "GitHub Actions",
    "Terraform",
    "Ansible",
    "Chef",
    "Puppet",
    "Kubernetes",
    "Docker",
    "Snowflake",
    "Pandas",
    "Selenium",
    "Playwright",
    "Cypress",
    "Jest",
    "Mocha",
    "Chai",
    "Jasmine",
    "Enzyme",
    "Cucumber",
    "Karma",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

const expertise = [
    { title: "Full Stack Web Development", 
      icon: faReact, 
      description: "I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development." ,
      labels: labelsFirst
    },
    { title: "Mobile Development", 
      icon: faMobile, 
      description: "Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live." ,
      labels: labelsMobile
    },
    { title: "Cloud Platforms", 
      icon: faCloud, 
      description: "Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live." ,
      labels: labelsCloudPlatfoms
    },
    { title: "DataBase", 
      icon: faDatabase, 
      description: "Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live." ,
      labels: labelDataBase
    },
    { 
      title: "DevOps & Automation", 
      icon: faDocker, 
      description: "Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live." ,
      labels: labelsDevOps
    },
    { title: "GenAI & LLM", 
      icon: faPython, 
      description: "Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making." ,
      labels: labelsThird
    },
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                {expertise.map((skill, index) => (
                    <div className="skill" key={index}>
                        <FontAwesomeIcon icon={skill.icon} size="3x"/>
                        <h3>{skill.title}</h3>
                        <p>{skill.description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {skill.labels?.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;