export default function FirstChunk() {
    const content = document.createElement("div");
    content.setAttribute("class", "chunk");
    content.setAttribute("id", "first-chunk");
    content.appendChild(intro());
    return content;
}

function intro() {
    const content = document.createElement("div");
    content.setAttribute("id", "intro");
    const introHeadline = document.createElement("h1");
    introHeadline.textContent = "Welcome to my site!";
    content.appendChild(introHeadline);
    const introSubHeadline = document.createElement("span");
    introSubHeadline.textContent = "This is a test site for a web development project.";
    content.appendChild(introSubHeadline);
    return content;
}
