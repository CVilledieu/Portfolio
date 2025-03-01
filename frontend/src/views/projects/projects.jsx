import './projects.css';
import ProjectData from './data.json';
import React from 'react';



export default function ProjectsPage() {
    const data = ProjectData;
    const LanguageMap = () => {
        lang = data[0];
        return (
            <LanguageDiv key={lang.id} title={lang.language} projectArray={lang.projects} />
        )};
    return (
        <div className='page' id="projects">
            <div className='project-btn' id='left-btn' >&lt;</div>
            <div id="projects-display">
                {LanguageMap()}
            </div>
            <div className='project-btn' id='right-btn'>&gt;</div>
        </div>
    );
}


function LanguageDiv({title, projectArray}) {
    return (
        <div className="language">
            <div className="language-name">
                {title}
            </div>
            <div className="language-projects">
                {projectArray.map(project => {
                    return (
                        <Project key={project.id} title={project.title} description={project.description} link={project.link} />
                    );
                })}
            </div>
        </div>
    );
}


function Project({title, description, link}) {
    return (
        <div className="project">
            <div className="project-title">
                {title}
            </div>
            <div className="project-description">
                {description}
            </div>
            <div className="project-link">
                <a href={link} target="_blank" rel="noreferrer">{link}</a>
            </div>
        </div>
    );
}