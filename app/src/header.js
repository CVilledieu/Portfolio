class Theme {
    constructor(Background_color, Primary_color, Secondary_color, Accent_color) {
        this.Background_color = Background_color;
        this.Primary_color = Primary_color;
        this.Secondary_color = Secondary_color;
        this.Accent_color = Accent_color;
    }
};

let currentTheme = "dark";
let darkTheme = new Theme("#000000", "#FFFFFF", "#000000", "#FF0000");
let lightTheme = new Theme("#FFFFFF", "#000000", "#FFFFFF", "#FF0000");


function ChangeTheme() {
    if (currentTheme === "dark") {
        SetTheme(lightTheme);
        currentTheme = "light";
    } else {
        SetTheme(darkTheme);
        currentTheme = "dark";
    }
}

function SetTheme(theme = darkTheme) {
    document.body.style.backgroundColor = theme.Background_color;
    document.body.style.color = theme.Primary_color;
}


const ThemeCheckbox = document.createElement("input");
ThemeCheckbox.setAttribute("type", "checkbox");
ThemeCheckbox.setAttribute("class", "theme-checkbox");
ThemeCheckbox.addEventListener("change", ChangeTheme);


export default function GetHeader() {
    let header = document.createElement("div");
    header.setAttribute("id", "header");
    header.appendChild(ThemeCheckbox);
    return header;
}