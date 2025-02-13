function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('theme', theme);
} 

function InitTheme() {
    const localTheme = localStorage.getItem('theme');
    if (localTheme !== null) {
        setTheme(localTheme);
    }
    const prefrence = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefrence.matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

}

function ThemeSwitch() {
    const themeSwitch = document.createElement("input");
    themeSwitch.setAttribute("type", "checkbox");
    themeSwitch.setAttribute("class", "theme-switch");
    themeSwitch.addEventListener("change", changeTheme);
    return themeSwitch;
}

function changeTheme() {
    const currentTheme = document.html.getAttribute("theme");
    if (currentTheme === "light") {
        document.html.setAttribute("theme", "dark");
    } else {
        document.html.setAttribute("theme", "light");
    }
}

export { InitTheme, ThemeSwitch };