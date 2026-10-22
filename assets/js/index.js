const sign = document.querySelector(".sign")
const login = document.querySelector(".login-katta")
const closeBtn = document.querySelector(".close-btn")

sign.addEventListener("click", () => {
    login.classList.toggle("active")
})
closeBtn.addEventListener("click", () => {
    login.classList.remove("active")
})