//Page 3 will display cards that represent projects
//Each card will have a title, description, and a link to the project


export default function ThirdChunk() {
    const content = document.createElement("div");
    content.setAttribute("class", "chunk");
    content.setAttribute("id", "third-chunk");
    const exampleCard = projectCard(projectExample);
    content.appendChild(exampleCard);
    return content;
}

function projectCard(project) {
    const card = document.createElement("div");
    card.setAttribute("class", "project-card");
    const cardTitle = document.createElement("h3");
    cardTitle.textContent = project.title;
    card.appendChild(cardTitle);
    const cardDetailsDv = document.createElement("div");
    cardDetailsDv.setAttribute("class", "project-card-details");
    project.details.forEach(detail => {
        cardDetailsDv.appendChild(projectDetailPair(detail[0], detail[1]));
    });
    card.appendChild(cardDetailsDv);
    const cardLink = document.createElement("a");
    cardLink.setAttribute("href", project.link);
    cardLink.textContent = "View Project";
    card.appendChild(cardLink);
    return card;
}

function projectDetailPair(label, info) {
    const details = document.createElement("div");
    details.setAttribute("class", "project-details");
    const detailsLabel = document.createElement("label");
    detailsLabel.textContent = label + ":"; 
    details.appendChild(detailsLabel);
    const detailsInfo = document.createElement("label");
    detailsInfo.textContent = info;
    details.appendChild(detailsInfo);
    return details;
}


const projectExample = {
    title: "Example Title",
    details: [["label1", "Example Description"], ["label2", "Example Description"]],
    link: "https://example.com"
}

