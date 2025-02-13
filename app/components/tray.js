export default function Tray(name, content) {
    const tray = document.createElement("div");
    tray.setAttribute("class", "tray");
    tray.setAttribute("id", name+"-tray");
    tray.appendChild(content);
    return tray;
}