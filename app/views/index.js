import {InitTheme } from "/static/src/util/theme.js";
import ColumnedContent from "/static/src/columns.js";
import ThirdChunk from "/static/src/page3.js";
import {Nav} from "/static/src/util/Nav.js";

InitTheme();



function footer() {
    const footer = document.createElement("div");
    footer.setAttribute("id", "footer");
    const footerText = document.createElement("span");
    footerText.textContent = "This site was made with vanilla JS, hmtl, css, and a Golang server.";
    footer.appendChild(footerText);
    return footer;
}


function intro(h1, h2) {
    const buffer = document.createElement("div");
    buffer.setAttribute("id", "intro-buffer");
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
    buffer.appendChild(content);
    return buffer;
}

const root = document.getElementById("root");
root.appendChild(intro("Welcome to my site!", "Golang, JS, and so much more!"));
root.appendChild(ColumnedContent());
root.appendChild(ThirdChunk());
root.appendChild(Nav()); 
root.appendChild(footer());