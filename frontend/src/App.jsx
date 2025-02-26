import './App.css';
import './views/util/colors.css';
import React, {setState, useState, useContext, createContext, useEffect} from 'react';
import DefaultPage from './views/overview/default.jsx';
import CommentsPage from './views/comments/comments.jsx';
import ProjectsPage from './views/projects/projects.jsx';
import AboutPage from './views/about/about.jsx';
import HabitsPage from './views/habits/habits.jsx';
import { GithubSVG, LinkedInSVG, ResumeSVG, SunSVG, MoonSVG } from './views/util/svgs.jsx';


/*
TODO: 
- Add a Projects page
- Add a About Me page
- Fill in the last blank blocks on the Overview page
- Theme switch button
- Save state in local storage

*/

// Context for managing the display of the main content
const DisplayCtx = createContext({
  content:<DefaultPage />,
  setContent: () => {}
});

const ThemeCtx = createContext({
  theme: 'light',
  setTheme: () => {}
});

const App = () => {
  useEffect(() => {
    const storedPage = localStorage.getItem('page');
    if (storedPage) {
      setContent(updatePage(storedPage));
    }
  }, []);
  const [content, setContent] = useState(<DefaultPage />);
  const value = {content, setContent};
  return (
    <div id='app'>
      <DisplayCtx.Provider value={value}>
      <div id="side-block">
          <div id="nav-block">
            <Nav />
          </div>
      </div>
      <div id="main-block">
          {content}
      </div>
      </DisplayCtx.Provider>
    </div>
  );
};


const Nav = () => {
  const {content, setContent} = useContext(DisplayCtx);
  return (
    <div id="nav-inner">
      <div id="stage-select">
        <button className="nav-btn prime1" id="overview-nav-btn" onClick={() => setContent(updatePage('overview'))}>Overview</button>
        <button className="nav-btn prime1" id="comments-nav-btn" onClick={() => setContent(updatePage('comments'))}>Comments</button>
        <button className="nav-btn prime1" id="projects-nav-btn" onClick={() => setContent(updatePage('projects'))}>Projects</button>
        <button className="nav-btn prime1" id="about-nav-btn" onClick={() => setContent(updatePage('about'))}>About Me</button>
        <button className="nav-btn prime1" id="habits-nav-btn" onClick={() => setContent(updatePage('habits'))}>Code Habits</button>
        
      </div>
      <div id="nav-footer">
        <div className="contact-row">
          <FooterBtn icon={<GithubSVG />} link="https://github.com/CVilledieu" />
          <FooterBtn icon={<LinkedInSVG />} link="https://www.linkedin.com/in/cvilledieu/" />
        </div>
        <div className="contact-row">
          <ThemeBtn />
          <FooterBtn icon={<ResumeSVG />} link="" />
         </div> 
      </div>
    </div>
  );
}

function FooterBtn({icon, link}) {
  return (
    <button className="contact-btn prime1 footer-btn" onClick={() => {window.open(link)}}>{icon}</button>
  );
}


function ThemeBtn(){
return (
  <label className='contact-btn theme-switch prime1 footer-btn'>
    <input type='checkbox' className='checkbox' />
    <MoonSVG />
    <SunSVG />
  </label>
);
}

function updatePage(page) {
  localStorage.setItem('page', page);
  updateBtns(page);
  switch (page) {
    case 'overview':
      return <DefaultPage />;
    case 'comments':
      return <CommentsPage />;
    case 'projects':
      return <ProjectsPage />;
    case 'about':
      return <AboutPage />;
    case 'habits':
      return <HabitsPage />;
    default:
      return <DefaultPage />;
  }
}

function updateBtns(page) {
  const btns = document.getElementsByClassName('nav-btn');
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove('selected');
    if (btns[i].id === `${page}-nav-btn`) {
      btns[i].classList.add('selected');
    }
  }
}


export default App;