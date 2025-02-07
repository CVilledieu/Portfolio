//import ContentStyle from "/static/content/content";
let currentTheme = "dark";
class Theme {
    constructor(Background_color, Primary_color, Secondary_color, Accent_color) {
        this.Background_color = Background_color;
        this.Primary_color = Primary_color;
        this.Secondary_color = Secondary_color;
        this.Accent_color = Accent_color;
    }
};

let darkTheme = new Theme("#000000", "#FFFFFF", "#000000", "#FF0000");
let lightTheme = new Theme("#FFFFFF", "#000000", "#FFFFFF", "#FF0000");


const darkThemeBtn = document.createElement("button");
darkThemeBtn.innerHTML = "dark Theme";
darkThemeBtn.addEventListener("click", ChangeTheme);


function ChangeTheme() {
    if (currentTheme === "dark") {
        setTheme(lightTheme);
        currentTheme = "light";
    } else {
        setTheme(darkTheme);
        currentTheme = "dark";
    }
}

function setTheme(theme) {
    document.body.style.backgroundColor = theme.Background_color;
    document.body.style.color = theme.Primary_color;
}


setTheme(darkTheme);

const root = document.getElementById("root");

root.appendChild(darkThemeBtn);
