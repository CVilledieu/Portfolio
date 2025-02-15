export default function ColumnedContent() {
    const content = document.createElement("div");
    content.setAttribute("id", "columned-content");

    content.appendChild(leftColumn());
    content.appendChild(divider());
    content.appendChild(rightColumn());
    return content;
}

function leftColumn() {
    const content = document.createElement("div");
    content.setAttribute("class", "column");
    content.setAttribute("id", "left-column");
    content.appendChild(languages());
    return content;
}
function divider() {
    const content = document.createElement("div");
    content.setAttribute("id", "column-divider");
    return content;
}

function rightColumn() {
    const content = document.createElement("div");
    content.setAttribute("class", "column");
    content.setAttribute("id", "right-column");
    content.appendChild(aboutMe());
    content.appendChild(experience());
    return content;
}



function languages() {
    const content = document.createElement("div");
    content.setAttribute("class", "column-block");
    content.setAttribute("id", "languages-div");
    const title = document.createElement("div");
    title.setAttribute("class", "title");
    title.setAttribute("id", "langauges-title");
    title.textContent = "Languages";
    const display = languagesDisplay();
    content.appendChild(title);
    content.appendChild(display);
    return content;
}

function aboutMe() {
    const content = document.createElement("div");
    content.setAttribute("class", "column-block");
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

//Leet code profile api info
//github contributions graph
function experience() {
    const content = document.createElement("div");
    content.setAttribute("class", "column-block");
    content.setAttribute("id", "experience-div");
    const title = document.createElement("div");
    title.setAttribute("class", "title");
    title.textContent = "Experience";
    const display = experienceDisplay();
    content.appendChild(title);
    content.appendChild(display);
    return content;
}

function experienceDisplay() {
    const display = document.createElement("div");
    display.setAttribute("id", "experience-display");
    const exp = document.createElement("div");
    exp.textContent = "Experience";
    display.appendChild(exp);
    return display;
}

function languagesDisplay(){
    const display = document.createElement("div");
    display.setAttribute("id", "languages-display");
    const go = document.createElement("div");
    go.setAttribute("class", "language");
    go.setAttribute("id", "go");
    go.appendChild(goSvg());
    display.appendChild(go);
    return display;
}


const svgSize = 48;

function goSvg() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg.setAttribute("viewBox", "0 -14.75 254.5 254.5");
    svg.setAttribute("width", svgSize);
    svg.setAttribute("height", svgSize);
    svg.setAttribute("fill", "none");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg","path");
    const path2 = document.createElementNS("http://www.w3.org/2000/svg","path");
    path1.setAttribute("d", "M128.426,86.2c-9.785,2.485-16.464,4.349-26.093,6.834-2.33.621-2.485.777-4.5-1.553-2.33-2.64-4.038-4.349-7.3-5.9-9.785-4.815-19.259-3.417-28.112,2.33-10.561,6.834-16,16.929-15.842,29.51.155,12.425,8.7,22.676,20.968,24.385,10.561,1.4,19.414-2.33,26.4-10.251,1.4-1.708,2.64-3.572,4.194-5.747H68.163c-3.262,0-4.038-2.019-2.951-4.659,2.019-4.815,5.747-12.891,7.921-16.929a4.194,4.194,0,0,1,3.883-2.485h56.535c-.311,4.194-.311,8.387-.932,12.581a66.239,66.239,0,0,1-12.736,30.442C108.7,159.51,94.1,168.673,75.618,171.158c-15.221,2.019-29.355-.932-41.78-10.251a48.785,48.785,0,0,1-19.725-34.48c-2.019-16.929,2.951-32.15,13.2-45.508C38.342,66.475,52.942,57.312,70.8,54.05c14.6-2.64,28.578-.932,41.159,7.61a48.686,48.686,0,0,1,18.017,21.9C130.911,84.958,130.289,85.735,128.426,86.2Z");
    path2.setAttribute("d", "M179.835,172.09c-14.134-.311-27.025-4.349-37.9-13.668a48.711,48.711,0,0,1-16.774-29.976c-2.8-17.551,2.019-33.082,12.581-46.905,11.338-14.91,25.006-22.676,43.488-25.938,15.842-2.8,30.753-1.243,44.265,7.921,12.27,8.387,19.88,19.725,21.9,34.635,2.64,20.968-3.417,38.052-17.861,52.652a71.17,71.17,0,0,1-37.276,19.88C188.067,171.469,183.874,171.624,179.835,172.09ZM216.8,109.343a44.7,44.7,0,0,0-.466-5.125c-2.8-15.376-16.929-24.074-31.684-20.657-14.444,3.262-23.763,12.425-27.18,27.025a25.579,25.579,0,0,0,14.289,29.355c8.542,3.728,17.085,3.262,25.317-.932C209.345,132.64,216.024,122.7,216.8,109.343Z");
    svg.appendChild(path1);
    svg.appendChild(path2);
    return svg;
}

