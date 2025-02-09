
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

function projectTray() {
    let tray = document.createElement("div");
    tray.setAttribute("class", "tray");
    tray.setAttribute("id", "projects");
    return tray;
}

function ProjectCards() {
    let projectsDv = projectTray();
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

export {ProjectCards};



