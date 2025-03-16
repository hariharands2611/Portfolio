var icon = document.getElementById("themeIcon");
icon.onclick = () => {
    document.body.classList.toggle("lightTheme");
    if (document.body.classList.contains("lightTheme")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
};