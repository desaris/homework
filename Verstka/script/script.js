document.addEventListener("DOMContentLoaded", function () {

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