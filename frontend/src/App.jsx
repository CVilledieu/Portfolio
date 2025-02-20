import './App.css';

const App = () => {
  return (
    <div id='root'>
      <div id="Welcome-block">{welcomeBanner()}</div>
      <div id="nav-block">{nav()}</div>
      <div id="top-and-bottom-rows">
          <div id="top-row">
            <div id="lang-block">{lang()}</div>
            <div id="thoughts-blocks">{thoughts()}</div>
            <div id="links-block">{links()}</div>
          </div>
          <div id="bottom-row">
            <div id="about-block">{about()}</div>
            <div id="projects-block">{projects()}</div>
            <div id="filler-block">{filler()}</div>
          </div>
      </div>
    </div>
  );
};

function welcomeBanner() {
  return (
    <div id="welcome-inner-div">
      <h1>Welcome to my personal website!</h1>
      <p>My name is John Doe and I am a software engineer.</p>
    </div>
  );
}

const nav = () => {
  return (
    <div id="nav-inner-div">
      <ul>
        <li><a href="#top-row">Top</a></li>
        <li><a href="#bottom-row">Bottom</a></li>
      </ul>
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


export default App;
