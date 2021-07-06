const flags = document.querySelectorAll(".crew_member img");
const hoverText = document.querySelectorAll(".crew_member .hover_text");

for(var i = 0; i<flags.length; i++) {
    let counter = i;

    flags[counter].onmouseenter = function () {
        hoverText[counter].style.cursor = "pointer";
        flags[counter].style.display = "none";
        hoverText[counter].style.display = "block";
    }

    hoverText[counter].onmouseleave = function () {
        hoverText[counter].style.cursor = "pointer";
        flags[counter].style.display = "block";
        hoverText[counter].style.display = "none";
    }

}
