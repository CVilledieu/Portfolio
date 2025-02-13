
export default function Study() {
    const tabs = tabSelector();
}



function tabSelector() {
    const tabContainer = document.createElement("div");
    tabContainer.setAttribute("class", "tab-container");
 
    const indicator = document.createElement("div");
    indicator.setAttribute("class", "indicator");
    tabContainer.appendChild(radioInput("website"));
    tabContainer.appendChild(label("Website"));
    tabContainer.appendChild(radioInput("book"));
    tabContainer.appendChild(label("Book"));
    tabContainer.appendChild(radioInput("other"));
    tabContainer.appendChild(label("Other"));
    tabContainer.appendChild(indicator);
    return tabContainer;
}

function radioInput(name) {
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "tab");
    radio.setAttribute("id", "tab-" + name);
    radio.setAttribute("class", "tab tab--" + name);
    return radio;
}

function label(name) {
    const label = document.createElement("label");
    label.setAttribute("class", "tab_label");
    label.setAttribute("for", "tab-" + name);
    label.textContent = name;
    return label;
}


