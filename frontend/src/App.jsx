import './App.css';
import './views/util/colors.css';
import React, { useState, useEffect} from 'react';
import HomePage from './views/home/home_page.jsx';
import CommentsPage from './views/comments/comments_page.jsx';
import ProjectsPage from './views/projects/projects_page.jsx';
import AboutPage from './views/about/about_page.jsx';
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
    theme: 'dark',
};

//App is the main component that holds the navigation and the page content
//The page content is stored in state and is updated by the navigation buttons
//The navigation buttons are stored in the Nav component
//The Nav component is split into three groups: navigation buttons, external links, and utility buttons
//The prime nav buttons update the page state to display the corresponding page
//All page content can be found in the views folder
//Default page is the Home page
const App = () => {
  const [pageContent, setPageContent] = useState(pageState.page);
  useEffect(() => {
    const storedPage = localStorage.getItem('page');
    setPageContent(updatePage(storedPage));
  }, []);
    
  return (
    <div id='app'>
      <div id="side-block">
          <div id="nav-block">
            <Nav setFunc={setPageContent}  />
          </div>
      </div>
      <div id="main-block">
          {pageContent}
      </div>
    </div>
  );
};


//Nav contains the navigation buttons, external links, and utility buttons
//The navigation buttons are the main buttons that change the page content
//The external links are buttons that link to my other profiles
//The utility buttons are the resume link and the theme switch button
const Nav = ({setFunc}) => {
  return (
    <div id="nav-inner">
      <PrimeNav setFunc={setFunc} />
      <ExternalLinks />
      <NavFooter />
    </div>
  );
}

//PrimeNav contains the main navigation buttons that update the state of the page
//ClassNames: 
// nav-btn is the default button style, 
// page-select is used to set a style for the currently selected page's button
//
function PrimeNav({setFunc}) {
  const btn = (title, page, selected) => {
    return (
      <button 
        className={"nav-btn page-select all-nav-btns" + " "} 
        id={page + "-nav-btn"} 
        onClick={() => {setFunc(updatePage(page))}}
        >

        {title}

      </button>
    );
  }

  return (
    <div className='nav-group' id='prime-nav'>
      {btn('Home', 'overview')}
      {btn('Comments', 'comments')}
      {btn('Projects', 'projects')}
      {btn('About', 'about')}
    </div>
  );
}

//External links are the buttons that link to my other profiles
//This group includes any link that will take the user outside of the site
function ExternalLinks() {
  const btn = (title, link) => {
    return (
      <button className="nav-btn all-nav-btns" onClick={() => {window.open(link)}}>{title}</button>
    );
  }

  return (
    <div className='nav-group' id='outside-links'>
      {btn('Github', 'https://www.github.com/CVilledieu')}
      {btn('LinkedIn', 'https://linkedin.com/in/cvilledieu')}
      {btn('LeetCode', 'https://leetcode.com/u/EatKittens/')}
    </div>
  );
}


//Footer buttons are different from the rest of the buttons
//These are not Nav, but rather a link to my resume and the button to change the theme
//These buttons are smaller and side by side
function NavFooter() {
  const btn = (title, link) => {
    return (
      <button className="contact-btn all-nav-btns footer-btn" onClick={() => {window.open(link)}}>{title}</button>
    );
  }

  //Theme switch button set up to switch between light and dark mode
  //Btn cycles through a sun and moon icon to represent the theme
  const ThemeBtn = () =>{
    return (
      <label className='contact-btn theme-switch all-nav-btns  footer-btn'>
        <input type='checkbox' className='checkbox' />
        <MoonSVG />
        <SunSVG />
      </label>
    );
  }

  return (
    <div className='nav-group' id='nav-footer'>
      {btn(<ResumeSVG />, resume)}
      <ThemeBtn />
    </div>
  )
}



function updatePage(page) {
  localStorage.setItem('page', page);
  updateBtns(page);
  switch (page) {
    case 'home':
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
  const btns = document.getElementsByClassName('page-select');
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove('selected');
    if (btns[i].id === `${page}-nav-btn`) {
      btns[i].classList.add('selected');
    }
  }
}


export default App;