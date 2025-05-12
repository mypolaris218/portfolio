import React, {useState, useEffect} from "react";
import ReactGA from 'react-ga4'
import { useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactGA.initialize('G-BHP74FBL69');

const theme = createTheme({
    typography: {
        fontFamily: [
            '"Lato"',
            'sans-serif',
        ].join(','),
    }
})

function App() {
    const [mode, setMode] = useState<string>('dark');
    const location = useLocation();

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

      
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
    });
  }, [location]);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        <ThemeProvider theme={theme}>
            <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
                <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
                <FadeIn transitionDuration={700}>
                    <Main/>
                    <Expertise/>
                    <Timeline/>
                    <Project/>
                    <Contact/>
                </FadeIn>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;