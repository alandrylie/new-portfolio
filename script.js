let isDarkMode = true;


function toggleLightMode() {
    if (isDarkMode === true) {
        document.body.style.backgroundColor = "#FFFFFF";

        document.body.style.color = "#0f1e3f";

        document.getElementById("lightModeToggle").style.color = "#0f1e3f";

        document.getElementById("lightModeToggle").style.border = "1px solid #0f1e3f";

        const links = document.getElementsByTagName("a");

        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "#0f1e3f";
        }

        const navListLinks = document.querySelectorAll("nav ul a");

        for (let j = 0; j < navListLinks.length; j++) {
            navListLinks[j].style.border = " 1px solid #0f1e3f";
        }

        isDarkMode = false;

        localStorage.setItem("isDarkMode", "false");
    } else {
        document.body.style.backgroundColor = "#0f1e3f";

        document.body.style.color = "#c2bbbb";

        document.getElementById("lightModeToggle").style.color = "#c2bbbb";

        document.getElementById("lightModeToggle").style.border = "1px solid #c2bbbb";

        const links = document.getElementsByTagName("a");
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "#c2bbbb";
        }
        const navListLinks = document.querySelectorAll(" nav ul a");
        for (let j = 0; j < navListLinks.length; j++) {
            navListLinks[j].style.border = "1px solid #c2bbbb";
        }

        isDarkMode = true;
        localStorage.setItem("isDarkMode", "true");
    }
}

if (localStorage.getItem("isDarkMode") === "false") {
    toggleLightMode();
}

document.getElementById("lightModeToggle").onclick = toggleLightMode;
