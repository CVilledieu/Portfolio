import {InitTheme } from "/static/views/js/theme.js";
import {Links} from "/static/views/js/nav.js";

InitTheme();


function topRow() {
    const content = document.createElement("div");
    content.setAttribute("id", "top-row");
    content.setAttribute("class", "row");
    const welcomeBanner = document.createElement("div");
    welcomeBanner.setAttribute("class", "block");
    welcomeBanner.setAttribute("id", "welcome-banner")
    welcomeBanner.appendChild(intro("Welcome to my site!", "Golang, JS, and so much more!"));
    const languageBlock = document.createElement("div");
    languageBlock.setAttribute("class", "block");
    languageBlock.setAttribute("id", "language-block");
    languageBlock.appendChild(languages());
    const linkBlock = document.createElement("div");
    linkBlock.setAttribute("class", "block");
    linkBlock.setAttribute("id", "link-block");
    linkBlock.appendChild(Links());
    content.appendChild(welcomeBanner);
    content.appendChild(languageBlock);
    content.appendChild(linkBlock);
    return content;
}

function intro(h1, h2) {
    const content = document.createElement("div");
    content.setAttribute("id", "intro");
    const welcome = document.createElement("div");
    welcome.setAttribute("id", "intro-welcome");
    welcome.textContent = h1;
    content.appendChild(welcome);
    const tagLine = document.createElement("div");
    tagLine.setAttribute("id", "intro-phrase");
    tagLine.textContent = h2;
    content.appendChild(tagLine);
    return content;
}

function languages() {
    const content = document.createElement("div");
    content.setAttribute("id", "languages-div");
    const title = document.createElement("div");
    title.setAttribute("class", "title");
    title.setAttribute("id", "langauges-title");
    title.textContent = "Languages";
    const display = document.createElement("div");
    display.setAttribute("id", "languages-display");
    content.appendChild(title);
    content.appendChild(display);
    return content;
}



function bottomRow() {
    const content = document.createElement("div");
    content.setAttribute("id", "bottom-row");
    content.setAttribute("class", "row");
    const about = document.createElement("div");
    about.setAttribute("class", "block");
    about.setAttribute("id", "about-me");
    about.appendChild(aboutMe());
    const exp = document.createElement("div");
    exp.setAttribute("class", "block");
    exp.setAttribute("id", "experience");
    exp.appendChild(experience());
    content.appendChild(about);
    content.appendChild(exp);
    return content;
}


function aboutMe() {
    const content = document.createElement("div");
    content.setAttribute("id", "about-div");
    const title = document.createElement("div");
    title.setAttribute("class", "title");
    title.textContent = "About Me";
    const aboutText = document.createElement("span");
    aboutText.textContent = "Example text about me. I am a backend developer with experience in Go, Python, and Java. I have experience with databases, cloud services, and more.";
    content.appendChild(title);
    content.appendChild(aboutText);
    return content;
}

function experience() {
    const content = document.createElement("div");
    content.setAttribute("id", "experience-div");
    const title = document.createElement("div");
    title.setAttribute("class", "title");
    title.textContent = "Experience";
    const display = document.createElement("div");
    display.setAttribute("id", "experience-display");
    content.appendChild(title);
    content.appendChild(display);
    return content;
}

const root = document.getElementById("root");
root.appendChild(topRow());
root.appendChild(bottomRow());