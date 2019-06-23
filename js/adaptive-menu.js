const adaptiveMenu = document.getElementById('adaptive-menu');
const toggle = () => adaptiveMenu.className === "menu"
    ? adaptiveMenu.className += " responsive" : adaptiveMenu.className = "menu";
