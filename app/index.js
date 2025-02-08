import {Aboutme, ProjectCards} from "/static/src/content.js";
import GetHeader from "/static/src/header.js";


let HeaderDv = GetHeader();

let contentDv = document.createElement("div");
contentDv.setAttribute("id", "content");
contentDv.appendChild(Aboutme());
contentDv.appendChild(ProjectCards());


const root = document.getElementById("root");
root.appendChild(HeaderDv);
root.appendChild(contentDv);