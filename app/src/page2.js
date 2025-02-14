export default function SecondChunk() {
    const content = document.createElement("div");
    content.setAttribute("class", "chunk");
    content.setAttribute("id", "second-chunk");
    const langs = languages();
    content.appendChild(langs);
    return content;
}
//
function languages() {
    const content = document.createElement("div");
    content.setAttribute("id", "languages");
    const headline = document.createElement("h3");
    headline.textContent = "Languages and Tools";
    content.appendChild(headline);
    return content;
}

//Leet code profile api info
//github contributions graph
