import { AddCssLink } from "/static/src/util/util.js";


function aboutMeDescription() {
    let description = document.createElement("p");
    description.textContent = "I'm a developer who loves the more technical side of develpmont and coding. I started coding when I was younger wanting to be a game dev, but found life took me in a different direction. I've been working in the tech industry for over 10 years now and have worked on a variety of projects from web development to mobile apps. I'm always looking to learn new things and expand my knowledge.";
    return description;
}

function aboutMeTray() {
    let tray = document.createElement("div");
    tray.setAttribute("class", "tray");
    tray.setAttribute("id", "aboutme");
    return tray;
}



export function Aboutme() {
    AddCssLink("about");
    let aboutmeDv = aboutMeTray();
    let title = document.createElement("h1");
    title.textContent = "About Me";
    let description = aboutMeDescription();
    aboutmeDv.appendChild(title);
    aboutmeDv.appendChild(description);
    return aboutmeDv;
}
