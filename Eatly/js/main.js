(() => {
    //Модалка
    const signUp = document.querySelectorAll('.authorization__signUp');
    const login = document.querySelectorAll('.authorization__logIn')
    const modal = document.querySelector('.modal');
    const modal__signUp = document.querySelector('.modal__signUp');
    const modal__logIn = document.querySelector('.modal__logIn');
    const modal__reset = document.querySelector('.modal__reset');
    const body = document.querySelector('.body');
    const forgetLink = document.querySelector('.forget-pass__link');


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
        } else if (target.classList.contains('signIn__link')) {
            body.classList.remove('body--signUp-show');
            body.classList.add('body--logIn-show');
        }
    })

    modal__logIn.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('modal__close') || target.classList.contains('modal__logIn')) {
            body.classList.remove('body--logIn-show');
        } else if (target.classList.contains('signUp__link')) {
            body.classList.remove('body--logIn-show');
            body.classList.add('body--signUp-show');
        }
    })

    forgetLink.addEventListener('click', () => {
        body.classList.remove('body--logIn-show');
        body.classList.add('body--reset-show');
    })

    modal__reset.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('modal__close') || target.classList.contains('modal__reset')) {
            body.classList.remove('body--reset-show');
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
    const dishesSwiper = new Swiper(".dishes__swiper", {
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
        }
    });


    // ========Testimonials-slider========
    testimonialsSwiper = new Swiper(".testimonials__swiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: false,
        breakpoints: {
            500: {
                slidesPerView: 1.5,
            },
            651: {
                slidesPerView: 2,
            },
            851: {
                slidesPerView: 'auto'
            }
        },
        scrollbar: {
            el: '.testimonials__swiper-scrollbar',
        },
    });

    // =============FAQ-accordion===============
    const accordion = document.querySelectorAll('.FAQ-accordion__list');
    accordion.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target;
            const accordionControl = target.closest('.FAQ-accordion__control');

            if (accordionControl) {
                const accordionItem = accordionControl.parentElement;
                const accordionContent = accordionControl.nextElementSibling;
                console.log(accordionItem);
                console.log(accordionContent);
                if (accordionItem.classList.contains('FAQ-accordion__item--opened')) {
                    accordionItem.classList.remove('FAQ-accordion__item--opened');
                    accordionContent.style.maxHeight = 0;
                } else {
                    accordionItem.classList.add('FAQ-accordion__item--opened');
                    console.log(accordionControl);
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                }
            }
        })
    })
})();