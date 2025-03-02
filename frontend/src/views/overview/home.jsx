import './home.css';
import {CommentData} from '../comments/data.js';
import {Golang, Rust, JS} from '../util/svgs.jsx';
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
    const NewLang = (Svg, count) => {
        return (
            <div className='home-languages-single'>
                <div className='language-svg'>{Svg}</div>
                <StarRating count={count} />
            </div>
        );
    }
    const inner = (
        <div className='inner-div-home' id="home-languages">
            {NewLang(<Golang />, 5)}
            {NewLang(<JS />, 4)}
            {NewLang(<Rust />, 5)}
        </div>
    );
    return (
        <Block title="Languages" InnerDiv={inner}/>
    );
}

function StarRating({count}) {
    let empty = 5 - count;
    if (count > 5) {
        count = 5;
        empty = 0;
    }
    const Stars = () => {
        let stars = [];
        for (let i = 0; i < count; i++) {
            stars.push('★');
            
        }
        for (let i = 0; i < empty; i++) {
            stars.push('☆');
        }
        return stars;
    }
    return (
        <div className="stars color-accent">
            {Stars()}
        </div>
        );
}


function Projects() {
    const projectData = ProjectsJsonData;
    const [projectState, setProjectState] = useState(0);
    const projectCatagory = projectData[projectState];

    const inner = (
        <div className='inner-div-home' id="home-projects">
            <div className='home-projects-catagory'>
                {projectCatagory.catagory}
            </div>
            <div className='home-projects-display'>
                <div className='home-projects-nav'>
                    <ProjectNavBtn direction='left' onClick={() => setProjectState(projectState - 1)} />
                </div>
                <DisplayedProjects projects={projectCatagory.projects} />
                <div className='home-projects-nav'>
                    <ProjectNavBtn direction='right' onClick={() => setProjectState(projectState + 1)} />
                </div>
            </div>
        </div>
    );
    return (
        <Block title="Projects" size='large' InnerDiv={inner}/>
    );
}

function ProjectNavBtn({direction, onClick}) {
    return (
        <label className='home-projects-nav-btn' id={`projects-${direction}-nav`} onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </label>
    );
}

function DisplayedProjects({projects}) {
    return (
        <div className='home-projects-list'>
            {projects.map(project => {
                return <ProjectSingle key={project.id} title={project.title} description={project.description} link={project.link} />
            })}
        </div>
    );
}

function ProjectSingle({title, description, link}) {
    return (
        <div className='home-project'>
            <div className='home-project-title'>{title}</div>
            <div className='home-project-description'>{description}</div>
            <div className='home-project-link'><a href={link} target='_blank' rel='noreferrer'>click here</a></div>
        </div>
    );
}