import './projects.css';
import ProjectData from './data.json';
import React from 'react';




export default function ProjectsPage() {
    const data = ProjectData;
    const LanguageMap = () => {
        return data.map(lang => {
            return (
                <LanguageDiv key={lang.id} title={lang.catagory} projectArray={lang.projects} />
        )}
    )};
    return (
        <div className='page' id="projects">

            {LanguageMap()}
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
                <a href={link} target="_blank" rel="noreferrer">click here{link}</a>
            </div>
        </div>
    );
}