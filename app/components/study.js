
export default function Study() {
    const studyDv = document.createElement("div");
    const tabs = tabSelector();
    studyDv.appendChild(tabs);
    return studyDv;
}



function tabSelector() {
    const tabContainer = document.createElement("div");
    tabContainer.setAttribute("class", "tab-container");
 
    
    tabContainer.appendChild(radioInput("1"));
    tabContainer.appendChild(label("1","Website"));
    tabContainer.appendChild(radioInput("2"));
    tabContainer.appendChild(label("2","Book"));
    tabContainer.appendChild(radioInput("3"));
    tabContainer.appendChild(label("3","Other"));
    let indicator = document.createElement("div");
    indicator.setAttribute("class", "indicator");
    tabContainer.appendChild(indicator);
    return tabContainer;
}

function radioInput(name) {
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "tab");
    radio.setAttribute("id", "tab" + name);
    radio.setAttribute("class", "tab tab--" + name);
    return radio;
}

function label(index, name) {
    const label = document.createElement("label");
    label.setAttribute("class", "tab_label");
    label.setAttribute("for", "tab" + index);
    label.textContent = name;
    return label;
}


