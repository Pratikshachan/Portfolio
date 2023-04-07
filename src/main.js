// Burger menus
document.addEventListener('DOMContentLoaded', function () {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

const topNavbar = document.querySelector('.nav-container')
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        topNavbar.classList.add('nav-bg');
    } else {
        topNavbar.classList.remove('nav-bg');
    }
})



$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: '<i class="fa-solid fa-chevron-left prev_arrow"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right next_arrow"></i>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

const contactButton = document.getElementById('contact')
const demoContainer = document.querySelector('.demo-container')
const closeForm = document.querySelector('.hide')
const Body = document.querySelector('body')
contactButton.addEventListener('click', () => {
    demoContainer.classList.add('active')
    Body.style.overflowY = "hidden";

});

closeForm.addEventListener('click', () => {
    demoContainer.classList.remove('active')
    Body.style.overflowY = "auto";
})



function sendEmail(e) {
    e.preventDefault();

    Email.send({
        SecureToken: "dce93c83-fb11-43b6-943d-a5e0b924855e",
        To: 'pratiksha.chapagai5@gmail.com',
        From: document.getElementById('email').value,
        Subject: "Message for you!",
        Body: document.getElementById('message').value,
    }).then(
        message => alert(message)
    );

}


