import React from "react";
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

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

type project = {
    title: string;
    description: string;
    link: string;
    images: string[];
}

const projectContents: project[] = [
    {
        title: 'EY',
        description: 'Did UX strategy, software architecture consulting, and UI design for EY’s digital transformation business unit. We redesigned how customer data is shared between multiple applications.',
        link: 'https://www.ey.com/en_us/services/consulting/cognistreamer',
        images: [ey04],
    },
    {
        title: 'Shipmate',
        description: 'Designed and built a brand new platform for shipping and fulfillment logistics.',
        link: 'https://www.shipmatefulfillment.com/',
        images: [shipmate01],
    },
    {
        title: 'Omega',
        description: 'Completely rebranded and redesigned the logo and website for a cybersecurity and IT infrastructure company called Omega.',
        link: 'https://omega.ngo/',
        images: [omega01],
    },
    {
        title: 'People Metrics',
        description: 'Completely redesigned and upgraded the frontend for a customer experience data collection and survey company. This included a new data visualization dashboard and case management system and with new branding and logo.',
        link: 'https://www.peoplemetrics.com/',
        images: [people01],
    },
    {
        title: 'Victiv',
        description: 'We built the frontend from the ground up for a sports betting platform specializing in daily fantasy similar to Draft Kings. We built realtime data visualization for live games. The company was sold to Poker Stars and platform rebranded to Player Stars.',
        link: 'https://www.victiv.com/',
        images: [victiv01],
    },
    {
        title: 'Comcast',
        description: 'We built a design system and component library for use with 40+ internal applications used to manage internet and TV services for Comcast.',
        link: 'https://business.comcast.com/',
        images: [comcast01],
    },
    {
        title: 'Marketful',
        description: 'Developed a new brand and logo and designed a new UI/UX frontend for a marketing platform that provides tools for SEO keyword searches and demographics.',
        link: 'https://marketful.com/',
        images: [marketful01],
    },
    {
        title: 'Upstock',
        description: 'Designed and built a new platform for a stock trading and investment management company. We did the UI/UX, frontend, and backend for a new life management portal for insurance brokers, financial advisors, and family offices.',
        link: 'https://www.upstock.com/',
        images: [upstock01],
    },
    {
        title: 'Opticus',
        description: 'Designed and built a comprehensive insurance management platform from the ground up. We did the UI/UX, frontend, and backend for a new life management portal for insurance brokers, financial advisors, and family offices.',
        link: 'https://www.opticus.ai/',
        images: [opticus01, opticus02, opticus03, opticus04, opticus05, opticus06, opticus07, opticus08, opticus09],
    },
    {
        title: 'Tune FM',
        description: 'Designed a new splash landing page for a web3 music streaming platform in the cryptocurrency space that entices new users to join and discover new music.',
        link: 'https://tune.fm/',
        images: [tune01, tune02, tune03, tune04, tune05, tune06, tune07],
    },
]

function Project() {
    return(
        <Grid container sx={{justifyContent:'center'}} spacing={2} className="project-grid" id="projects">
            {
                projectContents.map((project, index) => (
                        <Grid item xs={12} md={5} sx={{mr: 2, ml: 2 }} key={index}>
                            <Link href={project.link} target="_blank" rel="noreferrer" underline="none">
                                <Box
                                    sx={{ 
                                        width: '100%',
                                        height: '70%',
                                        '& img': {
                                            width: '100%', 
                                            height: '100%', 
                                            objectFit: 'cover', 
                                            transition: 'transform 0.3s ease-in-out', 
                                            borderRadius: 5, 
                                            boxShadow: 3
                                        },
                                        '&:hover img': {
                                          transform: 'scale(1.03)',
                                        }
                                    }}
                                >
                                    <img src={project.images[0]} alt="thumbnail"></img>
                                    <Typography 
                                        variant="h2" 
                                        sx={{ 
                                            fontSize: '1.5rem', 
                                            fontWeight: 700, 
                                            mt: 2 
                                        }
                                    }>
                                    {project.title}
                                </Typography>
                                <Typography variant="body1" sx={{ fontSize: '1rem', mt: 1 }}>
                                    {project.description}
                                </Typography>
                                </Box>

                            </Link>
                    </Grid>
                ))
            }
        </Grid>
        
    );
}

export default Project;