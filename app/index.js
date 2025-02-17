import {InitTheme } from "/static/views/js/theme.js";
import {Links} from "/static/views/js/nav.js";

InitTheme();


function topRow() {
    const content = document.createElement("div");
    content.setAttribute("id", "top-row");
    content.setAttribute("class", "row");
    const welcomeBanner = document.createElement("div");
    welcomeBanner.setAttribute("id", "welcome-banner")
    welcomeBanner.appendChild(intro("Welcome to my site!", "Golang, JS, and so much more!"));
    const languageBlock = document.createElement("div");
    languageBlock.setAttribute("class", "block-top");
    languageBlock.setAttribute("id", "language-block");
    languageBlock.appendChild(languages());
    const blankBlock1 = document.createElement("div");
    blankBlock1.setAttribute("class", "block-top");
    blankBlock1.setAttribute("id", "blank-block1");
    blankBlock1.appendChild(hotTakes()); 
    const linkBlock = document.createElement("div");
    linkBlock.setAttribute("id", "link-block");
    linkBlock.appendChild(Links());
    content.appendChild(welcomeBanner);
    content.appendChild(languageBlock);
    content.appendChild(blankBlock1);
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

function hotTakes() {
    const content = document.createElement("div");
    content.setAttribute("class", "inner-block");
    content.setAttribute("id", "hot-takes-div");
    const title = document.createElement("div");
    title.setAttribute("class", "title");
    title.textContent = "Opinions / General thoughts on tech topics";
    content.appendChild(title);
    return content;
}

function languages() {
    const content = document.createElement("div");
    content.setAttribute("id", "languages-div");
    content.setAttribute("class", "inner-block");
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
    about.setAttribute("class", "block-bottom");
    about.setAttribute("id", "about-me");
    about.appendChild(aboutMe());
    const exp = document.createElement("div");
    exp.setAttribute("class", "block-bottom");
    exp.setAttribute("id", "experience");
    exp.appendChild(experience());
    const proj = document.createElement("div");
    proj.setAttribute("id", "projects");
    proj.appendChild(projects());
    content.appendChild(about);
    content.appendChild(exp);
    content.appendChild(proj);
    return content;
}


function aboutMe() {
    const content = document.createElement("div");
    content.setAttribute("id", "about-div");
    content.setAttribute("class", "inner-block");
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
    content.setAttribute("class", "inner-block");
    const title = document.createElement("div");
    title.setAttribute("class", "title");
    title.textContent = "Experience";
    const display = document.createElement("div");
    display.setAttribute("id", "experience-display");
    content.appendChild(title);
    content.appendChild(display);
    return content;
}

function projects() {
    const content = document.createElement("div");
    content.setAttribute("id", "projects-block");
    content.setAttribute("class", "inner-block");

    const type1 = document.createElement("div");
    type1.setAttribute("class", "project-type");
    type1.setAttribute("id", "type-1");
    const title1 = document.createElement("div");
    title1.setAttribute("class", "title");
    title1.textContent = "Go";
    const p1display = document.createElement("div");
    p1display.setAttribute("id", "projects-display");
    type1.appendChild(title1);
    type1.appendChild(p1display);

    const type2 = document.createElement("div");
    type2.setAttribute("class", "project-type");
    type2.setAttribute("id", "type-2");
    const title2 = document.createElement("div");
    title2.setAttribute("class", "title");
    title2.textContent = "JS";
    const p2display = document.createElement("div");
    p2display.setAttribute("id", "projects-display");
    type2.appendChild(title2);
    type2.appendChild(p2display);

    const type3 = document.createElement("div");
    type3.setAttribute("class", "project-type");
    type3.setAttribute("id", "type-3");
    const title3 = document.createElement("div");
    title3.setAttribute("class", "title");
    title3.textContent = "Other";
    const p3display = document.createElement("div");
    p3display.setAttribute("id", "projects-display");
    type3.appendChild(title3);
    type3.appendChild(p3display);


    content.appendChild(type1);
    content.appendChild(type2);
    content.appendChild(type3);
    
    return content;
}

const root = document.getElementById("root");
root.appendChild(topRow());
root.appendChild(bottomRow());