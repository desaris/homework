document.addEventListener("DOMContentLoaded", function () {

    // Бургер

    const burgerButton = document.querySelector(".burger__menu-wrapper");
    const overlay = document.querySelector(".overlay");
    const burgerOpened = document.querySelector(".header__top");
    let links = document.querySelectorAll(".mobile__link");
    function burgerOpenedOff() {
        overlay.style.zIndex = "-1"
        burgerButton.style.zIndex = "1"
        overlay.style.opacity = "0"
        burgerOpened.style.transform = "translateX(-100%)"
        burgerButton.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <mask id="mask0_0_563" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                                <rect width="16" height="16" fill="url(#pattern0_0_563)"/>
                                </mask>
                                <g mask="url(#mask0_0_563)">
                                <rect x="-2" y="-2" width="24" height="25" fill="white"/>
                                </g>
                                <defs>
                                <pattern id="pattern0_0_563" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_0_563" transform="scale(0.00195312)"/>
                                </pattern>
                                <image id="image0_0_563" width="512" height="512" xlink:href="data:image/png;base64,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"/>
                                </defs>
                                </svg>`
    }
    burgerButton.onclick = () => {
        if (burgerButton.style.zIndex === "1") {
            overlay.style.zIndex = "98"
            burgerButton.style.zIndex = "101"
            overlay.style.opacity = "1"
            burgerOpened.style.transform = "translateX(0%)"
            burgerButton.innerHTML = `<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="1.02437" y1="14.2933" x2="15.2933" y2="0.97563" stroke="white" stroke-linecap="round"/>
                                    <line x1="16.0525" y1="14.2655" x2="2.01224" y2="0.707004" stroke="white" stroke-linecap="round"/>
                                    </svg>
                                    `}
        else {
            burgerOpenedOff();
        }
    }
    overlay.onclick = burgerOpenedOff;

    links.forEach(el => {
        el.onclick = burgerOpenedOff;
    });

    // Таймер на баннер

    const banner = document.querySelector(".hero__present-timer");
    let seconds = document.querySelector(".timer-seconds");
    let minutes = document.querySelector(".timer-minutes");
    let hours = document.querySelector(".timer-hours");
    let days = document.querySelector(".timer-days");

    let second = 49;
    let minute = 40;
    let hour = 7;
    let day = 27;

    function updateLocalStorage() {
        localStorage.setItem('timer_second', second);
        localStorage.setItem('timer_minute', minute);
        localStorage.setItem('timer_hour', hour);
        localStorage.setItem('timer_day', day);
    }

    // Функция таймера

    function timer() {
        --second;
        seconds.textContent = `: ${second}`;

        // Обновляем localStorage при каждом изменении
        updateLocalStorage();

        if (second === 0) {
            --minute;
            second = 59;
            minutes.textContent = `: ${minute}`;
        }

        // Доп. проверку загнал а то иногда секунды улетали в -, хз почему
        if (second < 0) {
            --minute;
            second = 59;
            minutes.textContent = `: ${minute}`;
        }
        if (minute === 0) {
            --hour;
            minute = 59;
            hours.textContent = `: 0${hour}`;
        }
        if (hour === 0) {
            --day;
            hour = 23;
            days.textContent = day;
        }
        if (day === 0 && minute === 0 && hour === 0) {
            banner.style.display = "none";
        } else {
            setTimeout(timer, 1000);
        }
    }

    // Восстановление значений из localStorage при загрузке

    function restoreTimer() {
        second = localStorage.getItem('timer_second') || second;
        minute = localStorage.getItem('timer_minute') || minute;
        hour = localStorage.getItem('timer_hour') || hour;
        day = localStorage.getItem('timer_day') || day;
        seconds.textContent = `: ${second}`;
        minutes.textContent = `: ${minute}`;
        hours.textContent = `: 0${hour}`;
        days.textContent = day;
    }

    restoreTimer();
    timer();



    // Прогресс-бар

    var container = document.getElementById('progress-bar');
    var bar = new ProgressBar.SemiCircle(container, {
        strokeWidth: 4,
        color: '#FFEA82',
        trailColor: '#303030',
        trailWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            value: '',
            alignToBottom: false
        },
        from: { color: '#4C7B59' },
        to: { color: '#66d17e' },
        step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
            var value = Math.round(bar.value() * 100);
            if (value === 0) {
                bar.setText('');
            } else {
                bar.setText(value);
            }
            bar.text.style.color = state.color;
        }
    });

    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    // Обновляем прогресс-бар при изменении ползунка
    const progressInput = document.getElementById('progress-input');
    progressInput.addEventListener('input', (event) => {
        const value = event.target.value / 100; // Преобразуем в значение от 0 до 1
        bar.animate(value); // Анимируем прогресс-бар
    });

    // Инициализация прогресс-бара
    bar.animate(0); // Начальное значение

    const slider = document.getElementById('progress-input');
    const fill = document.getElementById('slider-fill');
    const percentages = document.querySelector('.briefcase__heading')
    const plate = document.querySelector('.briefcase__plate')

    // Функция для обновления заполненной части
    function updateFill() {
        const value = slider.value;
        const max = slider.max;
        const percentage = (value / max) * 100;
        fill.style.width = percentage + '%'; // Обновляем ширину заполненной части
        percentages.textContent = `до ${value}%`
        if (value <= 39) {
            plate.style = "background: linear-gradient(120deg, rgba(66, 89, 74, 0.4) 0%, rgba(101, 204, 125, 0.22) 100%)"
            plate.textContent = "Низкий риск"
        }
        if (value >= 40) {
            plate.style = "background: yellow"
            plate.textContent = "Средний риск"
        }
        if (value >= 70) {
            plate.style = "background: red"
            plate.textContent = "Высокий риск"
        }

    }
    // Обработчик события изменения значения ползунка
    slider.addEventListener('input', updateFill);


    //АККОРДЕОН


    let accWrapper = document.querySelectorAll(".answers__accordion-item");
    let accHidden = document.querySelectorAll(".answers__accordion-item--open");
    let arrowHidden = document.querySelectorAll(".answers__accordion-hidden--arrow")
    let arrowColored = document.querySelectorAll(".arrow-colored")
    accWrapper.forEach((el, index) => {
        el.onclick = () => {
            accHidden[index].classList.toggle("accordion__hidden")
            arrowHidden[index].classList.toggle("arrow-accordion")
            arrowHidden[index].classList.toggle("colored")
        }
    })
    accHidden.forEach((el, index) => {
        el.onclick = () => {
            accHidden[index].classList.toggle("accordion__hidden")
            arrowHidden[index].classList.toggle("arrow-accordion")
            arrowHidden[index].classList.toggle("colored")
        }
    })
})
