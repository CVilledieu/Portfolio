import { ThemeSwitch, InitTheme } from "/static/src/util/theme.js";
import Contacts from "/static/src/util/contact.js";
import FirstChunk from "/static/src/page1.js";
import SecondChunk from "/static/src/page2.js";
import ThirdChunk from "/static/src/page3.js";
import FourthChunk from "/static/src/page4.js";
InitTheme();


function header() {
    const header = document.createElement("div");
    header.setAttribute("id", "header");
    header.appendChild(Contacts());
    header.appendChild(ThemeSwitch());
    return header;
}





const root = document.getElementById("root");
root.appendChild(header()); 
root.appendChild(FirstChunk());
root.appendChild(SecondChunk());
root.appendChild(ThirdChunk());
root.appendChild(FourthChunk());