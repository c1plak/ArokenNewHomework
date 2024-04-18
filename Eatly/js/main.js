(() => {
    //Модалка
    const signUp = document.querySelectorAll('.authorization__signUp');
    const login = document.querySelectorAll('.authorization__logIn')
    const modal__signUp = document.querySelector('.modal__signUp');
    const modal__logIn = document.querySelector('.modal__logIn');
    const body = document.querySelector('.body');


    login.forEach(el => {
        el.addEventListener('click', (e) => {
            body.classList.toggle('body--logIn-show');
        })
    });

    signUp.forEach(el => {
        el.addEventListener('click', (e) => {
            body.classList.toggle('body--signUp-show');
        })
    });

    modal__signUp.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('modal__close') || target.classList.contains('modal__signUp')) {
            body.classList.remove('body--signUp-show');
        }
    })

    modal__logIn.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('modal__close') || target.classList.contains('modal__logIn')) {
            body.classList.remove('body--logIn-show');
        }
    })


    // Бургер меню
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', (e) => {
        if (body.classList.contains('body--burger-opened')) {
            body.classList.remove('body--burger-opened');
        } else {
            body.classList.add('body--burger-opened');
        }
    })

    // Слайдер-блюда
    const swiper = new Swiper(".dishes__swiper", {
        loop: true,
        spaceBetween: 5,
        slidesPerView: 1,
        breakpoints: {
            351: {
                slidesPerView: 1.5,
                spaceBetween: 5
            },
            475: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            651: {
                slidesPerView: 2.5,
                spaceBetween: 10
            },
            // when window width is >= 320px
            751: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 480px
            901: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            // when window width is >= 640px
            1051: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".dishes__slider-pagination",
            clickable: true,
            bulletActiveClass: 'dish__bullet--active'
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
    });
    
})();