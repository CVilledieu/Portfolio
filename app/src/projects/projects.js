//Template for the project catagory.
//Name of variable should be the name of the project catagory.
//NOTE: Projects are currently in an array of anonymous objects. Creating an actual object may not be needed
class Project{
    constructor(title, description){
        this.title = title;
        this.description = description;
    }
}


//Returns an array of project objects.
//Currently a placeholder for the actual function that will return the projects.
function getProjects() {
    return [[
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
    ],
    [
        {
            title: "Project 4",
            description: "This is the fourth project"
        },
        {
            title: "Project 5",
            description: "This is the fifth project"
        },
        {
            title: "Project 6",
            description: "This is the sixth project"
        }
    ]]; //This is a placeholder for the actual function that will return the projects.
}


//Main div for displaying projects
//Returns a div that holds the project lists and ability to select a project catagory.
export default function ProjectTray() {
    let tray = document.createElement("div");
    tray.setAttribute("class", "tray");
    tray.setAttribute("id", "projects");

    tray.appendChild(projectTable());
    return tray;
}

//Returns a div that allows the selection of a project catagory. Aswell as the list for the selected catagory.
function projectTable() {
    let catalog = document.createElement("div");
    catalog.setAttribute("class", "project-catalog");
    getProjects().forEach(catagory => {
        let catagoryDv = listOfProjects(catagory);
        catalog.appendChild(catagoryDv);
    });
    return catalog;
}

//Returns a div containing a catagory of projects from an input array of project objects.
function listOfProjects(catagory) {
    let projectsDv = document.createElement("div");
    projectsDv.setAttribute("class", "project-list");
    catagory.forEach(project => {
        let projectDv = document.createElement("div");
        projectDv.setAttribute("class", "project-individual");
        let title = document.createElement("h3");
        title.textContent = project.title;
        let description = document.createElement("p");
        description.textContent = project.description;
        projectDv.appendChild(title);
        projectDv.appendChild(description);
        projectsDv.appendChild(projectDv);
    });
    return projectsDv;
}