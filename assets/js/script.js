const copyrightDate = document.getElementById('copyright_date')
copyrightDate.innerHTML += new Date().getFullYear()

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    smartSpeed: 700,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

const periodToggle = document.querySelector(".period-toggle")
const priceAmount = document.querySelectorAll(".pricing__amount")
const periodDates = document.querySelectorAll(".pricing__date")

periodToggle.addEventListener("click", (e) => {
    e.preventDefault()
    periodToggle.classList.toggle("active")
    Array.from(priceAmount).map((item) =>
        item.classList.toggle("price__transform")
    )
    Array.from(periodDates).map((item) =>
        item.classList.toggle("period__transform")
    )
})

AOS.init({
    once: true
})