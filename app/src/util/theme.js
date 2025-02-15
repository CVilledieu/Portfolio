function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('theme', theme);
} 

function InitTheme() {
    const localTheme = localStorage.getItem('theme');
    
    if (localTheme !== null) {
        setTheme(localTheme);
    } else {
        const prefrence = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefrence.matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    
}


function ThemeSwitch() {
    const themeSwitchContainer = document.createElement("div");
    themeSwitchContainer.setAttribute("id", "theme-switch-container");
    const themeSwitch = document.createElement("input");
    themeSwitch.setAttribute("type", "checkbox");
    themeSwitch.setAttribute("class", "theme-checkbox");
    themeSwitch.setAttribute("id", "theme-checkbox");
    themeSwitch.addEventListener("change", changeTheme);
    if (localStorage.getItem("theme") === "light") {
        themeSwitch.setAttribute("checked", "true");
    }
    themeSwitchContainer.appendChild(themeSwitch);
    return themeSwitchContainer;
}

function changeTheme() {
    const page = document.querySelector("html");
    const currentTheme = page.getAttribute("theme");
    if (currentTheme === "light") {
        setTheme("dark");
    } else {
        setTheme("light");
    }
}

export { InitTheme, ThemeSwitch };