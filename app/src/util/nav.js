import {ThemeSwitch} from "/static/src/util/theme.js";

function Nav() {
    const Contacts = document.createElement("div");
    Contacts.setAttribute("id", "contacts-dv");
    const row1 = document.createElement("div");
    row1.setAttribute("class", "contacts-row");

    row1.appendChild(linkedin());
    row1.appendChild(ThemeSwitch());
    const row2 = document.createElement("div");
    row2.setAttribute("class", "contacts-row");
    row2.appendChild(github());
    row2.appendChild(resume());
    Contacts.appendChild(row1);
    Contacts.appendChild(row2);
    return Contacts;
}

const svgSize = 36;


class contactInfo {
    constructor(name, link, icon) {
        this.name = name;
        this.link = link;
        this.icon = icon;
    }
    getButton() {
        const button = document.createElement("button");
        button.setAttribute("class", "contact");
        button.setAttribute("id", "contact-" + this.name);
        button.appendChild(this.icon);   
        button.addEventListener("click", function() {
            window.open(this.link);
        });
        return button;
    }
}

function linkedin() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg.setAttribute("viewBox", "0 0 448 512");
    svg.setAttribute("width", svgSize);
    svg.setAttribute("height", svgSize);
    svg.setAttribute("fill", "none");
    const path = document.createElementNS("http://www.w3.org/2000/svg","path");
    path.setAttribute("fill", "white");
    path.setAttribute("d", "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z")
    svg.appendChild(path);
    const link = "https://www.linkedin.com/in/cvilledieu/";
    const linked = new contactInfo("linkedin", link, svg);
    return linked.getButton();
}

function github() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", svgSize);
    svg.setAttribute("height", svgSize);
    svg.setAttribute("fill", "none");
    const path = document.createElementNS("http://www.w3.org/2000/svg","path");
    path.setAttribute("fill", "white");
    path.setAttribute("d","M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z")
    svg.appendChild(path);
    const link = "https://github.com/CVilledieu";
    const git = new contactInfo("github", link, svg);
    return git.getButton();
}

function resume() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", svgSize);
    svg.setAttribute("height", svgSize);
    svg.setAttribute("fill", "none");
    const path = document.createElementNS("http://www.w3.org/2000/svg","path");
    path.setAttribute("fill", "white");
    path.setAttribute("d","M9.29289 1.29289C9.48043 1.10536 9.73478 1 10 1H18C19.6569 1 21 2.34315 21 4V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V8C3 7.73478 3.10536 7.48043 3.29289 7.29289L9.29289 1.29289ZM18 3H11V8C11 8.55228 10.5523 9 10 9H5V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3ZM6.41421 7H9V4.41421L6.41421 7ZM7 13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H8C7.44772 14 7 13.5523 7 13ZM7 17C7 16.4477 7.44772 16 8 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H8C7.44772 18 7 17.5523 7 17Z");
    svg.appendChild(path);
    return new contactInfo("resume", "https://example.com", svg).getButton();
}


export {Nav};