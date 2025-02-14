
function getWebsites() {
    const websites = [{
        name: "MDN Web Docs",
        details: "The best place to learn web development"
    },];
  return websites;
}

function getOthers() {
    const others = [{
        name: "Notebooks",
        details: "Scribble your thoughts and ideas or sketch your designs"
    },];
  return others;
}

function getBooks() {
    const books = [{
        name: "The Pragmatic Programmer",
        details: "Your journey to mastery"
    },
    {
        name: "Clean Code",
        details: "A handbook of agile software craftsmanship"
    },
    {
        name: "Go the Programming Language",
        details: "A simple programming language"
    }
];
  return books;
}

export { getBooks, getWebsites, getOthers};