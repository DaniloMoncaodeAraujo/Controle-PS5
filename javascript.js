const menuicon = document.querySelector(".menu-icon")
let menulist = document.querySelector("#menu-list")

console.log(menulist)

menuicon.addEventListener("click", eventbutton)

function eventbutton() {
    if (menulist.style.display === "none") {

        menulist.style.display = "block"

    } else {
        menulist.style.display = "none"
    }

}
