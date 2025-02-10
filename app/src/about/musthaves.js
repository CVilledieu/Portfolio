import { NewTabSelector } from "/static/src/util/util.js";

export default function MustHavesTray() {
    let tray = document.createElement("div");
    tray.setAttribute("class", "tray");
    tray.setAttribute("id", "musthaves");
    let tabContainer = NewTabSelector("Books","websites", "Other");
    tray.appendChild(tabContainer);
    let itemsDv = BuildList(getBookArray());
    tray.appendChild(itemsDv);
    return tray;
}


class item {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

function getBookArray() {
    return [
        new item("The Rust Programming Language", "Lorem ipsum odor amet, consectetuer adipiscing elit. Et ipsum magnis ut ornare vivamus nibh elementum suscipit. Nascetur dignissim himenaeos class sagittis quisque sit. "),
        new item("The Go Programming Language", "Lorem ipsum odor amet, consectetuer adipiscing elit. Et ipsum magnis ut ornare vivamus nibh elementum suscipit. Nascetur dignissim himenaeos class sagittis quisque sit. "),
        new item("The Pragmatic Programmer", "Lorem ipsum odor amet, consectetuer adipiscing elit. Et ipsum magnis ut ornare vivamus nibh elementum suscipit. Nascetur dignissim himenaeos class sagittis quisque sit. ."),
    ]
}

function getOtherArray() {
    return [
        new item("Notebook", "So many problems have been solved with a notebook and pen. It's a great way to jot down ideas and work through problems."),
    ]
}

function buildItemDv(item) {
    let itemDv = document.createElement("div");
    itemDv.setAttribute("class", "item");
    let name = document.createElement("h3");
    name.textContent = item.name;
    let description = document.createElement("p");
    description.textContent = item.description;
    itemDv.appendChild(name);
    itemDv.appendChild(description);
    return itemDv;
}

function BuildList(itemList) {
    let list = document.createElement("div");
    list.setAttribute("id", "itemsList");
    itemList.forEach(element => {
        list.appendChild(buildItemDv(element));
    });
    return list;
}
