import { ThemeSwitch } from "/static/components/theme.js";
import Tray from "/static/components/tray.js";
import Contacts from "/static/components/contacts.js";
import Study from "/static/components/study.js";




function header() {
    const header = document.createElement("div");
    header.setAttribute("id", "header");
    header.appendChild(Contacts());
    header.appendChild(ThemeSwitch);
    return header;
}

function content() {
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    const study = Tray("study", Study());
    content.appendChild(study);
    return content;
}


function main() {

    const study = Tray("study", "Study");


    const root = document.getElementById("root");
    root.appendChild(study);
}
