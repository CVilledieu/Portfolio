import './base.css';

export default function DefaltPage() {
    return (
        <div id="default-inner-div">
          <div class="row" id="top-row">
            <div id="block-1" class="block">{lang()}</div>
            <div id="block-2" class="block">{thoughts()}</div>
            <div id="block-3" class="block">{links()}</div>
          </div>
          <div class="row" id="bottom-row">
            <div id="about-block" class="block">{about()}</div>
            <div id="projects-block" class="block">{projects()}</div>
            <div id="filler-block" class="block">{filler()}</div>
          </div>
        </div>
    );
}

const lang = () => {
return (
    <div id="lang-inner-div">
    <h2>Languages</h2>
    <ul>
        <li>Go</li>
        <li>JavaScript</li>
        <li>Rust</li>
    </ul>
    </div>
);
}

const thoughts = () => {
return (
    <div id="thoughts-inner-div">
    <h2>Thoughts</h2>
    <p>Here are some of my thoughts...</p>
    </div>
);
}

const links = () => {
return (
    <div id="links-inner-div">
    </div>
);
}

const about = () => {
return (
    <div id="about-inner-div">
    <h2>About</h2>
    <p>Here is some information about me...</p>
    </div>
);
}

const projects = () => {
return (
    <div id="projects-inner-div">
    <h2>Projects</h2>
    <p>Here are some of my projects...</p>
    </div>
);
}

const filler = () => {
return (
    <div id="filler-inner-div">
    </div>
);
}