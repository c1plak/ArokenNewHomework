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
    
})();