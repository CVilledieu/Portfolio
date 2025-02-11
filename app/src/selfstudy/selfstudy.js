export default function SelfStudyTray() {
    let tray = document.createElement("div");
    tray.setAttribute("class", "tray");
    tray.setAttribute("id", "selfstudy");
    
    
    return tray;
}

class matirials {
    constructor(name, link, description) {
        this.name = name;
        this.link = link;
        this.description = description;
    }
}
