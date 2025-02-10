import data from '/static/src/about/items.json' assert { type: 'json' }; // Import data from data.json file

class Node {
    constructor(name,data) {
        this.data = data;
        this.name = name;
        this.children = [];
        this.parent = null;        
    }
}

function selectorDv(){
    let selector = document.createElement("div");
    selector.setAttribute("class", "selector");
    let left = document.createElement("button");
    left.setAttribute("id", "item-button-left");
    left.setAttribute("class", "item-button");
    let right = document.createElement("button");
    right.setAttribute("id", "item-button-right");
    right.setAttribute("class", "item-button");
    let back = document.createElement("button");
    back.setAttribute("id", "item-button-back");
    back.setAttribute("class", "item-button");
    selector.appendChild(left);
    selector.appendChild(right);
    selector.appendChild(back);
    return selector;
}

function updateButtons(btn, str) {
    btn.textContent = str;
}

function bitree() {
    let root = new Node("root", data);
    let current = root;
    let selector = selectorDv();
    let left = document.getElementById("item-button-left");
    let right = document.getElementById("item-button-right");
    let back = document.getElementById("item-button-back");
    left.addEventListener("click", () => {
        if (current.children.length > 0) {
            current = current.children[0];
            updateButtons(left, current.name);
            updateButtons(right, current.children[0].name);
        }
    });
    right.addEventListener("click", () => {
        if (current.children.length > 1) {
            current = current.children[1];
            updateButtons(left, current.children[0].name);
            updateButtons(right, current.children[1].name);
        }
    });
    back.addEventListener("click", () => {
        if (current.parent != null) {
            current = current.parent;
            updateButtons(left, current.children[0].name);
            updateButtons(right, current.children[1].name);
        }
    });
    return selector;
}

function itemListDv(list) {
    let listOfItems = document.createElement("div");
    listOfItems.setAttribute("id", "items-list");
    list.array.forEach(item => {
        listOfItems.appendChild(itemDv(item));
    });
}

function itemDv(item) {
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