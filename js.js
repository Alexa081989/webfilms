// * добавление премьер на страницу (массив)
    const premieres = [
    {
    name: "Аватар 3",
    poster: "img/films/avatar3.jpg",
    date: "2024-12-19"
    },
    {
    name: "Барби",
    poster: "img/films/barbie.webp",
    date: "2023-09-19"
    },
    {
    name: "Человек-паук: Паутина вселенных",
    poster: "img/films/spiderman.jpg",
    date: "2025-11-02"
    },
    {
    name: "Чебурашка",
    poster: "img/films/cheburashka.jpg",
    date: "2023-01-01"
    }
];
    //! перебор массива с премьерами (добавение их на страницу)
        const slider = document.querySelector(".slider"),
        slidesField = slider.querySelector(".slider__inner");
        premieres.forEach((item, index) => {
            slidesField.innerHTML += `
            <div class="slider__item" data-slider-item = "${index}">
                <img src="${item.poster}" alt="" class="slider__preview">
                <div class="slider__text">
                <h3 class="slider__title">${item.name}</h3>
                <div class="timer">
                </div>
                </div>
            </div>
            `
    // ? СОЗДАНИЕ ТАЙМЕРА
            setClock(item,index);
            setInterval(setClock, 1000, item,index);
        });
        function setClock(item,index) {
            const timer = slider.querySelector(`[data-slider-item = "${index}"] .timer`);
            const t = Date.parse(item.date) - Date.now(),
                days = Math.floor(t / 1000 / 60 / 60 / 24);

                if (t > 0 && days < 100) {
                const   seconds = Math.floor((t / 1000) % 60),
                        minutes = Math.floor((t / 1000 / 60) % 60),
                        hours = Math.floor((t / 1000 / 60 / 60) % 24);
                        timer.innerHTML = `
                        <p class="timer__desc">До премьеры осталось:</p>
                        <div class="timer__row">
                        <div class="timer__item">
                            <span class="timer__count">${getZero(days)}</span>
                            дней
                        </div>
                        <div class="timer__item">
                            <span class="timer__count">${getZero(hours)}</span>
                            часов
                        </div>
                        <div class="timer__item">
                            <span class="timer__count">${getZero(minutes)}</span>
                            минут
                        </div>
                        <div class="timer__item">
                            <span class="timer__count">${getZero(seconds)}</span>
                            секунд
                        </div>
                        </div>
                        `;
                } else if (t <= 0) {
                    timer.innerHTML = `
                    <p class="timer__desc">Премьера состоялась ${convertDate(item.date)} <button class="timer__link">Оценить</button>
                        </p>
                    `;
                } else {
                    timer.innerHTML = `
                    <p class="timer__desc">Премьера состоится ${convertDate(item.date)}</p>
                    `
                }
                    function getZero(num) {
                        if (num >= 0 && num <= 10) return `0${num}`;
                        else return num;
                    }
                    function convertDate(date) {
                        date = date.split("-");
                        const year = date[0];
                        date[0] = date[2];
                        date[2] = year;
                        return date.join(".");
                    }
        };
// Кинотека
const films = [
{
    name: "Зверополис",
    poster: "img/films/zootopia.webp",
    rating: 10,
    genre: "Мультфильм",
    favourite: true,
    date: "2023-11-30"
},
{
    name: "Кто я",
    poster: "img/films/whoami.jpg",
    rating: 7,
    genre: "Фильм",
    favourite: false,
    date: "2022-07-15"
},
{
    name: "Бывает и хуже",
    poster: "img/films/themiddle.webp",
    rating: 9,
    genre: "Сериал",
    favourite: true,
    date: "2020-12-01"
},
{
    name: "Я на перемотке!",
    poster: "img/films/more/roll.jpeg",
    rating: 3,
    genre: "Фильм",
    favourite: false,
    date: "2023-10-14"
},
{
    name: "Бэймакс!",
    poster: "img/films/more/baymax.webp",
    rating: 6,
    genre: "Мультфильм",
    favourite: false,
    date: "2021-08-09"
},
{
    name: "Как я встретил вашу маму",
    poster: "img/films/more/mother.webp",
    rating: 7,
    genre: "Сериал",
    favourite: true,
    date: "2024-09-30"
},
{
    name: "Валли",
    poster: "img/films/more/walle.webp",
    rating: 9,
    genre: "Мультфильм",
    favourite: false,
    date: "2022-06-24"
},
{
    name: "Трудности ассимиляции",
    poster: "img/films/more/fresh.webp",
    rating: 8,
    genre: "Сериал",
    favourite: false,
    date: "2023-01-18"
},
{
    name: "Молодой человек",
    poster: "img/films/more/young.webp",
    rating: 7,
    genre: "Фильм",
    favourite: false,
    date: "2019-04-22"
},
{
    name: "Неисправимый Рон",
    poster: "img/films/more/ron.webp",
    rating: 10,
    genre: "Мультфильм",
    favourite: true,
    date: "2024-01-12"
},
{
    name: "Клаус",
    poster: "img/films/more/klaus.webp",
    rating: 10,
    genre: "Мультфильм",
    favourite: false,
    date: "2023-01-01"
},
{
    name: "Ральф против интернета",
    poster: "img/films/more/ralph.webp",
    rating: 2,
    genre: "Мультфильм",
    favourite: false,
    date: "2020-03-30"
},
{
    name: "Отель «Гранд Будапешт»",
    poster: "img/films/more/hotel.webp",
    rating: 1,
    genre: "Фильм",
    favourite: false,
    date: "2018-05-23"
},
{
    name: "Друзья",
    poster: "img/films/more/friends.webp",
    rating: 6,
    genre: "Сериал",
    favourite: false,
    date: "2014-04-03"
},
{
    name: "Голдберги",
    poster: "img/films/more/goldbergs.webp",
    rating: 5,
    genre: "Сериал",
    favourite: false,
    date: "2023-11-02"
},
{
    name: "Побег",
    poster: "img/films/more/prisonbreak.webp",
    rating: 9,
    genre: "Сериал",
    favourite: true,
    date: "2016-07-12"
},
{
    name: "В метре друг от друга",
    poster: "img/films/more/apart.webp",
    rating: 6,
    genre: "Фильм",
    favourite: true,
    date: "2020-03-06"
},
{
    name: "Чудо",
    poster: "img/films/more/wonder.webp",
    rating: 3,
    genre: "Фильм",
    favourite: false,
    date: "2021-11-11"
},
{
    name: "Малыш на драйве",
    poster: "img/films/more/driver.webp",
    rating: 9,
    genre: "Фильм",
    favourite: true,
    date: "2018-06-30"
},
{
    name: "С любовью, Рози",
    poster: "img/films/more/rosie.webp",
    rating: 7,
    genre: "Фильм",
    favourite: true,
    date: "2023-02-12"
},
];

//* ПРИВЕТСТВИЕ!
const helloSelector = document.querySelector("#hello");
const nameSelector = document.querySelector("#name");
const date = new Date;
const hoursNow = date.getHours();

if (hoursNow >= 6 && hoursNow <= 11) {
    helloSelector.textContent = "Доброе утро";
} else if (hoursNow >= 12 && hoursNow <= 15){
    helloSelector.textContent = "Добрый день";
} else if (hoursNow >= 16 && hoursNow <= 22){
    helloSelector.textContent = "Добрый вечер";
} else {
    helloSelector.textContent = "Доброй ночи";
}
let userName = localStorage.getItem("name") || "Пользователь";
nameSelector.textContent = userName;
nameSelector.addEventListener('click',() => {
    let newName;
    do {
        newName = prompt('Введите ваше имя:');
        if (newName === null) return;
    } while (!newName.trim() || newName.length > 15);
    if (userName != newName) {
        userName = newName;
        localStorage.setItem("name", userName);
        nameSelector.textContent = userName;
    }
});
// ? СЛАЙДЕР (с прокруткой)
    const slides = slider.querySelectorAll(".slider__item"),
            prev = slider.querySelector(".slider__arrow--prev"),
            next = slider.querySelector(".slider__arrow--next"),
            slidesWindow = slider.querySelector(".slider__wrapper"),
            widthSlideWithPx = window.getComputedStyle(slidesWindow).width,
            widthSlide = +widthSlideWithPx.slice(0, widthSlideWithPx.length - 2);

        let slideIndex = 0;
        let offset = -(widthSlide * slideIndex);
        slidesField.style.width = 100 * slides.length + "%";
        next.addEventListener("click", () => {
            offset -= widthSlide;
            slideIndex ++;
            moveSlides();
        });
        prev.addEventListener("click", () => {
            offset += widthSlide;
            slideIndex --;
            moveSlides();
        });
            function showAndHideArrows() {
                if (slides.length <= 1) {
                    prev.style.display = "none";
                    next.style.display = "none";
                } else if (slideIndex == 0) {
                    prev.style.display = "none";
                    next.style.display = "block";
                } else if (slideIndex == slides.length - 1) {
                    prev.style.display = "block";
                    next.style.display = "none";
                } else {
                    prev.style.display = "block";
                    next.style.display = "block";
                }};
            showAndHideArrows();
    // ? ИНДИКАТОРЫ ДЛЯ СЛАЙДА
                const indicators = document.createElement("ol");
                indicators.classList.add("slider__indicators");
                slider.append(indicators);
                for(i = 0; i < slides.length; i++) {
                    if (slides.length <= 1 || slides.length >= 20 ) break;
                    const dot = document.createElement("li");
                    dot.classList.add("slider__dot");
                    dot.setAttribute("data-slide-index", i);
                    if (i == slideIndex) dot.classList.add("slider__dot--active");
                    dot.addEventListener("click", () => {
                        slideIndex = dot.getAttribute("data-slide-index");
                        offset = -(widthSlide * slideIndex);
                        moveSlides();
                    });
                    indicators.append(dot);
                }
                const dots = indicators.querySelectorAll(".slider__dot");
                function moveSlides() {
                    slidesField.style.transform = `translate(${offset}px)`;
                        showAndHideArrows();
                        dots.forEach(dot => dot.classList.remove("slider__dot--active"));
                        dots[slideIndex].classList.add("slider__dot--active");
                        slidesField.style.transition = "0.5s all";
                }
                moveSlides();
// * ДОБАВЛЯЕМ НА СТРАНИЦУ КИИНОТЕКУ
        const filmsSelector = document.querySelector(".films"),
                filmsWrapper = filmsSelector.querySelector(".films__wrapper");
        function addFilmsOnPage(films) {
            if (films.length == 0) {
                filmsWrapper.innerHTML = `<p>Фильмы не найдены</p>`;
            } else {
            filmsWrapper.innerHTML = `
                <div class="loader loader--style6" title="5">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                    <rect x="0" y="13" width="4" height="5" fill="#333">
                    <animate attributeName="height" attributeType="XML"
                        values="5;21;5" 
                        begin="0s" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="y" attributeType="XML"
                        values="13; 5; 13"
                        begin="0s" dur="0.6s" repeatCount="indefinite" />
                    </rect>
                    <rect x="10" y="13" width="4" height="5" fill="#333">
                    <animate attributeName="height" attributeType="XML"
                        values="5;21;5" 
                        begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="y" attributeType="XML"
                        values="13; 5; 13"
                        begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                    </rect>
                    <rect x="20" y="13" width="4" height="5" fill="#333">
                    <animate attributeName="height" attributeType="XML"
                        values="5;21;5" 
                        begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="y" attributeType="XML"
                        values="13; 5; 13"
                        begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                    </rect>
                </svg>
                </div>
        `
        let filmsText = "";
        films.forEach(film => {
            const favourite = film.favourite ? "checked" : "";
            filmsText += `
            <div class="film">
            <img src="${film.poster}" alt="" class="film__poster">
            <div class="film__content">
            <div class="film__content-row">
                <div class="rating film__rating">${film.rating}</div>
                <label class="film__favourite favourite">
                <input type="checkbox" name="favourite" class="favourite__checkbox" ${favourite}>
                <span class="favourite__heart"></span>
                </label>
            </div>
            <div class="film__content-row">
                <h4 class="film__name">${film.name}</h4>
                <div class="film__genre">${film.genre}</div>
            </div>
            </div>
        </div>
        `
        })
        setTimeout(() => filmsWrapper.innerHTML = filmsText, 600);
    }
}
addFilmsOnPage(films);

//! ФИЛЬТРАЦИЯ И СОРТИРОВКА ФИЛЬМОВ
let formSelector = filmsSelector.querySelector(".films__form");
let favouriteSelector = formSelector.querySelector('input[name="favourites"]');
let bestSelector = formSelector.querySelector('input[name="best"]');
let genresSelector = formSelector.querySelectorAll('input[name="genre"]');
let sortSelector = formSelector.querySelector('select[name="sort"]');

formSelector.addEventListener('change', () => {
const filtres = {genres:[]};
genresSelector.forEach(item => {
    if (item.checked) filtres.genres.push(item.value);
})
if (favouriteSelector.checked) filtres.favourite = true;
if (bestSelector.checked) filtres.best = true;

let filteredFilms = filterFilms(films, filtres);
if (sortSelector.value != "Без сортировки") {
    filteredFilms = sortFilms(filteredFilms, sortSelector.value);
}
addFilmsOnPage(filteredFilms);
});

function filterFilms(films, filtres) {
    return films.filter(film => {
        const matchesGenre = filtres.genres.length === 0 || filtres.genres.includes(film.genre);
        const matchesFavourite = !filtres.favourite || film.favourite;
        const matchesBest = !filtres.best || film.rating >= 8;

        return matchesGenre && matchesFavourite && matchesBest;
    });
}

    function sortFilms(films, sort) {
        console.log(films, sort);
        switch (sort) {
            case "От высокой к низкой":
                films.sort((film1, film2) => film1.rating <= film2.rating ? 1 : -1);
                break;
            case "От низкой к высокой":
                films.sort((film1, film2) => film1.rating <= film2.rating ? -1 : 1);
                break;
            case "От а до я":
                films.sort((film1, film2) => film1.name <= film2.name ? -1 : 1);
                break;
            case "От я до а":
                films.sort((film1, film2) => film1.name <= film2.name ? 1 : -1);
                break;
            case "Сначала новые":
                films.sort((film1, film2) => film2.date <= film1.date ? -1 : 1);
                break;
            case "Сначала старые":
                films.sort((film1, film2) => film2.date <= film1.date ? 1 : -1);
                break;
        }
        return films;
    }

    document.addEventListener('DOMContentLoaded', function () {
        const aboutFilmWrapper = document.querySelector('.about-film-wrapper');
        const fillingFormWrapper = document.querySelector('.filling-form-wrapper');
        const aboutFilmOpenBtn = document.querySelector('.film__content-row .film__name'); 
        const fillingFormOpenBtn = document.querySelector('.films__btn');
        const aboutFilmExitBtn = document.querySelector('.about-film .exit-btn');
        const fillingFormExitBtn = document.querySelector('.filling-form .exit-btn');
        function openModal(modal) {
        modal.classList.remove('none');
        document.body.classList.add('no-scroll');
        }
        function closeModal(modal) {
        modal.classList.add('none');
        document.body.classList.remove('no-scroll');
        }
        if (aboutFilmOpenBtn) {
        aboutFilmOpenBtn.addEventListener('click', () => openModal(aboutFilmWrapper));
        }
        if (fillingFormOpenBtn) {
        fillingFormOpenBtn.addEventListener('click', () => openModal(fillingFormWrapper));
        }
        if (aboutFilmExitBtn) {
        aboutFilmExitBtn.addEventListener('click', () => closeModal(aboutFilmWrapper));
        }
        if (fillingFormExitBtn) {
        fillingFormExitBtn.addEventListener('click', () => closeModal(fillingFormWrapper));
        }
        window.addEventListener('click', (event) => {
        if (event.target === aboutFilmWrapper) {
            closeModal(aboutFilmWrapper);
        }
        if (event.target === fillingFormWrapper) {
            closeModal(fillingFormWrapper);
        }
        });
    });
