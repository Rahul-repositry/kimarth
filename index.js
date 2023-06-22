
let slide = document.querySelector(".burgerSlide");
let burger = document.querySelector(".burger");
let cross = document.querySelector(".navSection .cross");
let lifeTimeFacilites = document.querySelectorAll('.facilitiesSection .contentWrapper')
let description = document.querySelectorAll(
    ".Benefits-section .desc-1-div "
);
let allContentElements = document.querySelectorAll('.facilitiesSection .contentContainer .contentWrapper')
console.log(lifeTimeFacilites, allContentElements)

function chqClass(arr) {
    return [...arr].map((el) => {
        if (el.classList.contains("showDescription")) {
            el.classList.remove("showDescription");
        }
        return true;
    });
}

description.forEach((faq, index, arr) => {
    faq.addEventListener("click", (e) => {
        if (chqClass(arr)) {
            faq.classList.toggle("showDescription");
            let img =
                e.target.parentElement.parentElement.parentElement.parentElement
            console.log(img)
            img.src = `public/descImg${index}.png`;
            console.log(img)

        }
    });
});

lifeTimeFacilites.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.stopPropagation()

        let contentElement = e.target.parentElement.parentElement
        console.log(e, contentElement)
        if (chqClass(allContentElements)) {
            contentElement.classList.add('showDescription')
        }
    })
})

burger.addEventListener("click", () => {
    slide.style.left = "0px";
});

cross.addEventListener("click", () => {
    slide.style.left = "120vw";
});

var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        type: 'progressbar',
    },
    grabCursor: true,
    loop: true,
    sliderPerView: 1,
    speed: 1000,
    paginationClickable: true,
    parallax: true,
    autoplay: false,
    effect: "slide",
    mousewheelControl: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});
