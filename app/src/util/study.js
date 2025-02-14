/*
import {getBooks, getWebsites, getOthers} from "/static/data/content.js";

function Study() {
    const studyDv = document.createElement("div");
    studyDv.setAttribute("id", "study-tray");
    const studyListDv = document.createElement("div");
    studyListDv.setAttribute("id", "study-list");
    const tabs = tabSelector();
    studyDv.appendChild(tabs);
    studyDv.appendChild(studyListDv);
    return studyDv;
}

function InitList() {
    const localTab = localStorage.getItem("study-tab");
    if (localTab !== null) {
        studyContent(localTab);
        switch (localTab) {
            case "Websites":
                const tab = document.querySelector(".tab--1");
                tab.checked = true;
                return;
            case "Books":
                const tab2 = document.querySelector(".tab--2");
                tab2.checked = true;
                return;
            case "Others":
                const tab3 = document.querySelector(".tab--3");
                tab3.checked = true;
                return;
            default: break;
        }
        
    } else {
        studyContent("Websites");
    }
}


function studyContent(tabName = "Books") {
    const studyList = document.getElementById("study-list");
    studyList.innerHTML = "";
    switch (tabName) {
       
        case "Websites":
            localStorage.setItem("study-tab", "Websites");
            return studyList.appendChild(websitesList);
        case "Books":  
            localStorage.setItem("study-tab", "Books");
            return studyList.appendChild(booksList);

        case "Others":
            localStorage.setItem("study-tab", "Others");
            return studyList.appendChild(othersList);
            
        default: break;
    }

}
function createList(list) { 
    const studyList = document.createElement("div");
    list.forEach((item) => {
        const itemContent = document.createElement("div");
        itemContent.setAttribute("class", "item");
        const title = document.createElement("h3");
        title.setAttribute("class", "item-title");
        title.textContent = item.name;
        itemContent.appendChild(title);
        const description = document.createElement("p");
        description.setAttribute("class", "item-description");
        description.textContent = item.details;
        itemContent.appendChild(description);
        studyList.appendChild(itemContent);
    });
    return studyList;
}

const booksList = createList(getBooks());
const websitesList = createList(getWebsites());
const othersList = createList(getOthers());


function tabSelector() {
    const tabContainer = document.createElement("div");
    tabContainer.setAttribute("class", "tab-container");
 
    
    tabContainer.appendChild(radioInput("1","Websites"));
    tabContainer.appendChild(label("1","Website"));
    tabContainer.appendChild(radioInput("2","Books"));
    tabContainer.appendChild(label("2","Book"));
    tabContainer.appendChild(radioInput("3","Others"));
    tabContainer.appendChild(label("3","Other"));
    let indicator = document.createElement("div");
    indicator.setAttribute("class", "indicator");
    tabContainer.appendChild(indicator);
    return tabContainer;
}

function radioInput(index, name) {
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "tab");
    radio.setAttribute("id", "tab" + index);
    radio.setAttribute("class", "tab tab--" + index);
    radio.addEventListener("click", () => {
        studyContent(name);
    });
    return radio;
}

function label(index, name) {
    const label = document.createElement("label");
    label.setAttribute("class", "tab_label");
    label.setAttribute("for", "tab" + index);
    label.textContent = name;
    return label;
}


export { Study, InitList };

*/