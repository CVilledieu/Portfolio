

export function Aboutme() {
    let aboutmeDv = document.createElement("div");
    aboutmeDv.setAttribute("id", "aboutme");
    let title = document.createElement("h1");
    title.textContent = "About Me";
    let description = document.createElement("p");
    description.textContent = "I am a web developer";
    aboutmeDv.appendChild(title);
    aboutmeDv.appendChild(description);
    return aboutmeDv;
}



function getProjects() {
    return [
        {
            title: "Project 1",
            description: "This is the first project"
        },
        {
            title: "Project 2",
            description: "This is the second project"
        },
        {
            title: "Project 3",
            description: "This is the third project"
        }
    ];
}

export function ProjectCards() {
    let projectsDv = document.createElement("div");
    projectsDv.setAttribute("id", "projects");
    getProjects().forEach(project => {
        let projectDv = document.createElement("div");
        projectDv.setAttribute("class", "project");
        let title = document.createElement("h3");
        title.textContent = project.title;
        let description = document.createElement("p");
        description.textContent = project.description;
        projectDv.appendChild(title);
        projectDv.appendChild(description);
        projectsDv.appendChild(projectDv);
    });
    return projectsDv
}


export function contentWrapper() {
    let contentDv = document.createElement("div");
    contentDv.setAttribute("id", "content");
    contentDv.appendChild(Aboutme());
    contentDv.appendChild(ProjectCards());
    return contentDv;
}



