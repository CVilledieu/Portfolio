import './layout2.css';
import {useState, useContext} from 'react';
import {ThemeCtx} from './App.jsx';
import {GithubSVG, LinkedInSVG, ResumeSVG, SunSVG, MoonSVG} from './svgs.jsx';
import HomePage from './views/overview/home.jsx';


function Nav({state}) {
    return (
        <div id='nav'>
            <div id='page-select'>
            <button className="nav-btn prime1" onClick={() => state.setPage(pages.home)}>Home</button>
            <button className="nav-btn prime1" onClick={() => state.setPage(pages.comments)}>Comments</button>
            <button className="nav-btn prime1" onClick={() => state.setPage(pages.projects)}>Projects</button>
            </div>
            <div id='nav-others'>
                <ThemeBtn />
            </div>
        </div>

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

const pages = {
    home: <HomePage />,
    comments: <CommentsPage />,
    projects: <ProjectsPage />,
};

const pageState = {
    page: <HomePage />,
    setPage: () => {},
    theme: 'dark',
    setTheme: () => {},
};


export default function App() {
    const [pageContent, setPageContent] = useState(pageState);
    return (
        <div id='app'>
            <div id='nav-container'>
                <Nav state={setPageContent} />
            </div>
            <div id='main'>
                {pageContent.page}
            </div>
        </div>
    )

}