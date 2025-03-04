import './projects.css';
import ProjectData from './data.json';
import React from 'react';




export default function ProjectsPage() {
    const data = ProjectData;
    const LanguageMap = () => {
        return data.map(library => {
            return (
                <LanguageDiv key={library.id} title={library.category} projectsList={library.list} />
        )}
    )};
    return (
        <div className='page' id="projects">

            {LanguageMap()}
        </div>
    );
}


function LanguageDiv({title, projectsList}) {
    return (
        <div className="language">
            <div className="language-name">
                {title}
            </div>
            <div className="language-projects">
                {projectsList.map(project => {
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