export default function Tray(Name, Conent) {
    let tray = document.createElement("div");
    tray.setAttribute("class", "tray");
    tray.setAttribute("id", Name+"-tray");
    tray.appendChild(Conent);
    return tray;
}