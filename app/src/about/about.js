import { AddCssLink } from "/static/src/util/util.js";


function aboutMeDescription() {
    let description = document.createElement("p");
    description.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Metus maecenas suspendisse urna ornare suscipit tortor. Elit nunc rutrum habitasse mus metus porta vestibulum vivamus eu. Elementum volutpat odio inceptos aliquam leo justo class natoque. Metus senectus justo malesuada urna rutrum lobortis neque quis. Lacus arcu nostra mauris arcu senectus. Proin vulputate nullam fusce rhoncus interdum iaculis nulla tempus sollicitudin.";
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
