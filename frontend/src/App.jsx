import './App.css';
import React, {setState, useState, useContext, createContext} from 'react';
import DefaultPage from './views/overview/default.jsx';
import CommentsPage from './views/comments/comments.jsx';
import { GithubSVG, LinkedInSVG, ResumeSVG } from './views/util/svgs.jsx';

const DisplayCtx = createContext({
  content:<DefaultPage />,
  setContent: () => {}
});

const App = () => {
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
        <button className="nav-btn" onClick={() => setContent(<DefaultPage />)}>Overview</button>
        <button className="nav-btn" onClick={() => setContent(<CommentsPage />)}>Comments</button>
        <button className="nav-btn">Projects</button>
        <button className="nav-btn">About Me</button>
        
      </div>
      <div id="nav-footer">
        <div className="contact-row">
          <button className="contact-btn"><GithubSVG /></button>
          <button className="contact-btn"><LinkedInSVG /></button>
        </div>
        <div className="contact-row">
          <button className="contact-btn">Email</button>
          <button className="contact-btn"><ResumeSVG /></button>
         </div> 
      </div>
    </div>
  );
}




export default App;