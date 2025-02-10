import {ThemeCheckbox, SocialWrapper} from "/static/src/util/util.js";
import {Aboutme} from "/static/src/about/about.js";
import ProjectCards from "/static/src/projects/projects.js";
import MustHaves from "/static/src/about/musthaves.js";


function ContentWrapper() {
    let contentDv = document.createElement("div");
    contentDv.setAttribute("id", "content");
    let contentArray = [Aboutme(), ProjectCards(), MustHaves()];
    let spacer = document.createElement("div");
    spacer.setAttribute("class", "spacer");
    contentArray.forEach(content => {
        contentDv.appendChild(content);
    });
    return contentDv;
}



function Navbar() {
    let header = document.createElement("div");
    header.setAttribute("id", "header");
    header.appendChild(SocialWrapper());
    header.appendChild(ThemeCheckbox);

    return header;
}


function finishedApp() {
    let app = document.createElement("app");
    app.appendChild(Navbar());
    app.appendChild(ContentWrapper());
    return app;
}

const root = document.getElementById("root");
root.appendChild(finishedApp());
