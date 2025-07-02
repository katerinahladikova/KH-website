const button = document.querySelectorAll(".copy-btn")
const text = "kat.hladikova@email.cz"
const header = document.querySelector("header")
const menu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

let scrollDirection = "up"
let prevPosition = 0

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        const copy = button[i].querySelector(".copy")
        navigator.clipboard.writeText(text).then(function() {
            copy.textContent = "check"
            setTimeout(function() {
                copy.textContent = "content_copy"
            }, 1000)
        })
    })
}

window.addEventListener("scroll", function() {
    const position = window.scrollY
    if (prevPosition < position) {
        scrollDirection = "down"
    } else {
        scrollDirection = "up"
    }

    prevPosition = position
    const headerHeight = header.getBoundingClientRect().height
    header.style.top = scrollDirection === "down"? `-${headerHeight}px` : "0px" 
})

menu.addEventListener("click", function() {
    mobileMenu.classList.toggle("menu-open")
    const icon = menu.querySelector("span")
    if (mobileMenu.classList.contains("menu-open")) {
        icon.textContent = "close"
    } else {
        icon.textContent = "menu"
    }
})
