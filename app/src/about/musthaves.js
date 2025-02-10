export default function MustHavesTray() {
    let tray = document.createElement("div");
    tray.setAttribute("class", "tray");
    tray.setAttribute("id", "musthaves");
    let tabContainer = newTabSelector("Books","Websites", "Other");
    
    tray.appendChild(tabContainer);
    let itemsDv = buildList(getBookArray());
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
function getWebsiteArray() {
    return [
        new item("Stack Overflow", "Lorem ipsum odor amet, consectetuer adipiscing elit. Et ipsum magnis ut ornare vivamus nibh elementum suscipit. Nascetur dignissim himenaeos class sagittis quisque sit. "),
        new item("MDN Web Docs", "Lorem ipsum odor amet, consectetuer adipiscing elit. Et ipsum magnis ut ornare vivamus nibh elementum suscipit. Nascetur dignissim himenaeos class sagittis quisque sit. "),
        new item("W3Schools", "Lorem ipsum odor amet, consectetuer adipiscing elit. Et ipsum magnis ut ornare vivamus nibh elementum suscipit. Nascetur dignissim himenaeos class sagittis quisque sit. "),
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

function buildList(itemList) {
    let list = document.createElement("div");
    list.setAttribute("id", "itemsList");
    itemList.forEach(element => {
        list.appendChild(buildItemDv(element));
    });
    return list;
}


function indicatorWidth(n, p) {
    let w = 320;
    let x = w - (p*n + p);
    return x/n;
}

function newTabSelector(...Names) {
    if (Names.length > 4) {
        console.error("Too many tabs, max is 4");
        return null;
    } 

    let tabContainer = document.createElement("div");
    tabContainer.setAttribute("class", "tab-container");
    let gap = 2;
    let iWidth = indicatorWidth(Names.length, gap);
    Names.forEach((name, index) => {
        let tab = document.createElement("input");
        tab.setAttribute("type", "radio");
        tab.setAttribute("name", "tab");
        tab.setAttribute("id", "tab-" + name);
        tab.setAttribute("class", "tab tab-" + name);
        let label = document.createElement("label");
        label.setAttribute("class", "tab_label");
        label.setAttribute("for", "tab-" + name);
        label.textContent = name;
        tabContainer.appendChild(tab);
        tabContainer.appendChild(label);
        const style = document.createElement("style");
        style.innerHTML = `
        .tab-${name}:checked ~ .indicator {
            left: ${(index * iWidth) + gap}px;
        }`
        tabContainer.appendChild(style);
        tab.addEventListener("checked", () => { 
            updateForm(name);
        });
    });

    let indicator = document.createElement("div");
    indicator.setAttribute("class", "indicator");
    tabContainer.appendChild(indicator);
    indicator.style.width = iWidth + "px";
    return tabContainer;
}

function updateForm(name) {
    let list = document.getElementById("itemsList");
    let items = [];
    switch(name) {
        case "Books":
            items = getBookArray();
            break;
        case "Websites":
            items = getWebsiteArray();
            break;
        case "Other":
            items = getOtherArray();
            break;
        default:
            console.error("Invalid tab name");
            return;
    }
    list.innerHTML = "";
    items.forEach(item => {
        list.appendChild(buildItemDv(item));
    });
}