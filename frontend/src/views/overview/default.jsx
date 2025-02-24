import './default.css';
import {Comments} from '../comments/data.js';
import {Golang, Rust, JS} from '../util/svgs.jsx';


export default function DefaultPage() {
    return (
        <div id="overview-div">
          <div className="row" id="top-row">
            <LanguagesV2 />
            <CommentsBlock />
            <Other />
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
    constructor(name, overview) {
        this.Name = name;
        this.Overview = overview;
    }

    block() {
        return (
            <div className="block overview">
                <div className="inner-block">
                    <div className='overview-name'>
                        <span>{this.Name}</span>
                        <hr />
                    </div>
                    
                    <div className='overview-description'>{this.Overview}</div>
                </div>
            </div>
        );
    }
}

function Other() {
    const other = new overviewInfo (
        "Other Stuff",
        "Here are some of the things that did not have a home..."
    );
    return other.block();
}

const Contact = () => {
    const contact = new overviewInfo (
        "Contact Me",
        <div id="contact-info-overview">
            <div> Christopher Villedieu</div>
            <div>Email: cvilledieu@proton.me</div>
            <div>Phone: (619)-933-6714 </div>
        </div>
    );
    return contact.block();
}


const Languages = () => {
    const lang = new overviewInfo("Languages", 
    <div id="overview-languages">
        <li>Go<StarRating full={5}/></li> 
        <li>JS<StarRating full={4} empty={1} /></li> 
        <li>Rust<StarRating full={2} empty={3} /></li> 
    </div>
    );
    return lang.block();
}

const LanguagesV2 = () => {
    const NewLang = (Svg, stars) => {
        return (
            <div className='overview-lang'>
                <div className='overview-lang-svg'>{Svg}</div>
                <div><StarRating full={stars} empty={5-stars} /></div>
            </div>
        );
    }
    const lang = new overviewInfo("Languages", 
    <div id="overview-lang-single">
        
        {NewLang(<Golang />, 5)}
        {NewLang(<JS />, 4)}
        {NewLang(<Rust />, 5)}
        
    </div>
    );
    return lang.block();
}


function StarRating({full, empty}) {
    const Stars = () => {
        let stars = [];
        for (let i = 0; i < full; i++) {
            stars.push('★');
            
        }
        for (let i = 0; i < empty; i++) {
            stars.push('☆');
        }
        return stars;
    }
    return (
        <span className="stars accent-tc">
            {Stars()}
        </span>
        );
}

const CommentsBlock = () => {
    const i = Math.floor(Math.random() * Comments.length);
    const comment = Comments[i];

    const thoughts = new overviewInfo (
        `${comment.Title}`, 
        <div id="overview-comments-summary">
            {comment.Summary}
        </div>

    );
    return thoughts.block(); 
}



const About = () => {
    const blank = new overviewInfo (
        "About Me",
        <div id="overview-about-me">
        I'm just your friendly neighborhood developer! I have a passion for the creation and problem solving side of code, but have a history that required clear and concise communication. I'm always looking for new challenges to tackle and new goals to meet!
        </div>
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