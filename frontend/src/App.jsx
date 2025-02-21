import './App.css';
import './styles/nav.css';
import DefaultPage from './views/base.jsx';

const App = () => {
  return (
    <div id='root'>
      <div id="side-block">
          <div id="welcome-block">{welcomeBanner()}</div>
          <div id="nav-block">{nav()}</div>
      </div>
      <div id="main-block">
        {DefaultPage()}
      </div>
    </div>
  );
};

function welcomeBanner() {
  return (
    <div id="welcome-inner-div">
      <h1>Welcome to my site!</h1>
      <p>Home for Golang, Rust, JS, and more!</p>
    </div>
  );
}

const nav = () => {
  return (
    <div id="nav-inner-div">
        <button>Overview</button>
        <button>Resume</button>
    </div>
  );
}

export default App;