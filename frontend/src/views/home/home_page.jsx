import './home_style.css';
import {CommentData} from '../comments/data.js';
import {Golang, Rust, JS, RightArrow, LeftArrow} from '../util/svgs.jsx';
import ProjectsJsonData from '../projects/data.json';
import React, {useState} from 'react';


export default function HomePage() {
    return (
        <div className="page" id="home">
            <title>Home</title>
            <Comments />
            <AboutMe />
            <Languages />
            <ContactInfo />
            <Projects />
        </div>
    );
}



function Block({InnerDiv, size = 'medium', title }) {
    return (
        <div className={"home-block" + " " + size}>
            <div className='outline-title'>{title}</div>
           {InnerDiv}
        </div>
    );
}

function AboutMe() {
    const inner = (
        <div className='inner-div-home' id='home-about'>
            I'm just your friendly neighborhood developer! I have a passion for the creation and problem solving side of code. I'm always looking for new challenges to tackle and new goals to meet!
            </div>
    );
    return (
        <Block title="About Me" size='small' InnerDiv={inner}/>
    );

}

function Comments() {
    const comment = CommentData[Math.floor(Math.random() * CommentData.length)];
    const inner = (
        <div className='inner-div-home' id="home-comments">
            {comment.Summary}
        </div>
    );
    return (
        <Block title={comment.Title} InnerDiv={inner}/>
    );
}

function ContactInfo() {
    const inner = (
        <div className='inner-div-home' id="home-contact">
                <div> Christopher Villedieu</div>
                <div>cvilledieu@proton.me</div>
                <div>(619)-933-6714</div>
            </div>
    );
    return (
        <Block title="Contact Me" size='small' InnerDiv={inner}/>
    )
}


function Languages() {
    const NewLang = (Svg, ) => {
        return (
            <div className='home-languages-single'>
                <div className='language-svg'>{Svg}</div>
                
            </div>
        );
    }
    const inner = (
        <div className='inner-div-home' id="home-languages">
            {NewLang(<Golang />)}
            {NewLang(<JS />)}
            {NewLang(<Rust />)}
        </div>
    );
    return (
        <Block title="Go-to languages" InnerDiv={inner}/>
    );
}



function Projects() {
    var [libIndex, setLibIndex] = useState(0);
    const projectData = ProjectsJsonData;
    const [lib, setLib] = useState(projectData[libIndex]);

    const ProjectNavBtn = ({direction, onClick, disableFunc}) => {
        return (
            <div className='home-projects-nav'>
                <button className='home-projects-nav-btn' onClick={onClick} disabled={disableFunc}>
                    {direction === 'left' ? LeftArrow(): RightArrow()}
                </button>
            </div>
        );
    }

    const inner = (
        <div className='inner-div-home' id="home-projects">
            
            <ProjectNavBtn direction='left' 
                disableFunc={libIndex == 0 ? "disabled": ""} 
                onClick={() => {
                    setLib(() => projectData[libIndex - 1]);
                    setLibIndex(libIndex - 1);
                }} />
            
            <DisplayProjects library={lib} />

            <ProjectNavBtn direction='right' 
                disableFunc={libIndex == projectData.length-1 ? "disabled" : ""} 
                onClick={() => {
                    setLib(() => projectData[libIndex+1]);
                    setLibIndex(libIndex+1);
                }} />
        </div>
    );
    return (<Block title="Projects" size='large' InnerDiv={inner}/>);
}




function DisplayProjects({library}) {
    const ProjectSingle = ({title, description, link}) => {
        return (
            <div className='home-projects-single'>
                <div className='home-project-title'>{title}</div>
                <div className='home-project-description'>{description}</div>
                <div className='home-project-link'><a href={link} target='_blank' rel='noreferrer'>click here</a></div>
            </div>
        );
    }

    const projectsList = library.list;
    return (
        <div className='home-projects-display'>
            <div className='home-projects-library'><span>{library.category}</span></div>
            <div className='home-projects-list'>
            {projectsList.map(project => {
                return <ProjectSingle key={project.id} title={project.title} description={project.description} link={project.link} />
            })}
            </div>
        </div>
    );
}

