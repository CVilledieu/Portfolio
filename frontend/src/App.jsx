import './App.css';
import './views/util/colors.css';
import React, { useState, useEffect} from 'react';
import HomePage from './views/overview/home.jsx';
import CommentsPage from './views/comments/comments.jsx';
import ProjectsPage from './views/projects/projects.jsx';
import AboutPage from './views/about/about.jsx';
import { GithubSVG, LinkedInSVG, ResumeSVG, SunSVG, MoonSVG } from './views/util/svgs.jsx';
import resume from './views/static/best2.jpg';


/*
TODO: 
- Add a Projects page
- Add a About Me page
- Fill in the last blank blocks on the Overview page
- Theme switch button
- Save state in local storage

*/


const pageState = {
    page: <HomePage />,
    setPage: () => {},
    theme: 'darkTheme',
    setTheme: () => {},
};

const App = () => {
  const [pageContent, setPageContent] = useState(pageState.page);
  const [theme, setTheme] = useState(pageState.theme);
  useEffect(() => {
    const storedPage = localStorage.getItem('page');
    setPageContent(updatePage(storedPage));
  }, []);
    

  return (
    <div id='app'>
      <div id="side-block">
          <div id="nav-block">
            <Nav setFunc={setPageContent} setTheme={setTheme} />
          </div>
      </div>
      <div id="main-block">
          {pageContent}
      </div>
    </div>
  );
};


const Nav = ({setFunc, setTheme}) => {
  return (
    <div id="nav-inner">
      <div id="stage-select">
        <button className="nav-btn prime1 selected" id="overview-nav-btn" onClick={() => setFunc(updatePage('overview'))}>Home</button>
        <button className="nav-btn prime1" id="comments-nav-btn" onClick={() => setFunc(updatePage('comments'))}>Comments</button>
        <button className="nav-btn prime1" id="projects-nav-btn" onClick={() => setFunc(updatePage('projects'))}>Projects</button>
        <button className="nav-btn prime1" id="about-nav-btn" onClick={() => setFunc(updatePage('about'))}>About</button>
        <button className="nav-btn prime1" id="about-nav-btn" onClick={() => setFunc(updatePage('about'))}>Github</button>
        <button className="nav-btn prime1" id="about-nav-btn" onClick={() => setFunc(updatePage('about'))}>LinkedIn</button>
        <button className="nav-btn prime1" id="about-nav-btn" onClick={() => setFunc(updatePage('about'))}>LeetCode</button>
        
      </div>
      <div id="nav-footer">
        <div className="contact-row">
          <FooterBtn icon={<GithubSVG />} link="https://github.com/CVilledieu" />
          <FooterBtn icon={<LinkedInSVG />} link="https://www.linkedin.com/in/cvilledieu/" />
        </div>
        <div className="contact-row">
          <ThemeBtn set={setTheme} />
          <FooterBtn icon={<ResumeSVG />} link={resume} />
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
      return <HomePage />;
    case 'comments':
      return <CommentsPage />;
    case 'projects':
      return <ProjectsPage />;
    case 'about':
      return <AboutPage />;
    default:
      return <HomePage />;
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