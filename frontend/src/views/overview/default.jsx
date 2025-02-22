import './default.css';


export default function DefaltPage() {
    return (
        <div id="overview-div">
          <div className="row" id="top-row">
            <Languages />
            <Comments />
            {blank()}
          </div>
          <div className="row" id="bottom-row">
            <About />
            <Projects />
            <Contact />
          </div>
        </div>
    );
}

class overviewInfo {
    static id = 0;
    constructor(name, overview) {
        this.id = overviewInfo.id++;
        this.Name = name;
        this.Overview = overview;
    }

    block() {
        return (
            <div id={"block-" + this.id} className="block overview">
                <div className="inner-block">
                    <div className='overview-name'>{this.Name}</div>
                    <div className='overview-description'>{this.Overview}</div>
                </div>
            </div>
        );
    }
}

const Contact = () => {
    const contact = new overviewInfo (
        "Contact Me",
        <div id="contact-info-overview">
            <div>Email: cvilledieu@proton.me</div>
            <div>Phone: (619)933-6714 </div>
        </div>
    );
    return contact.block();
}


const Languages = () => {
    const lang = new overviewInfo("Languages", 
    <ul>
        <li>Go</li> 
        <li>JavaScript</li> 
        <li>Rust</li> 
    </ul>
    );
    return lang.block();
}

const Comments = () => {
    const thoughts = new overviewInfo (
        "Thoughts/Opinions", 
        "Here are some of my thoughts..."
    );
    return thoughts.block(); 
}



const About = () => {
    const blank = new overviewInfo (
        "About",
        "Here is some information about me..."
    );
    return blank.block();

}

const Projects = () => {
    const projects = new overviewInfo (
        "Projects",
        "A most current projects..."
    );
    return projects.block();
}


const blank = () => {
    const blank = new overviewInfo (
        "Blank",
        "This is a blank space..."
    );
    return blank.block();
}