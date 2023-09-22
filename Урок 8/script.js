/*
    1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
*/
console.log('Task 1');

const inputFrom = document.querySelector('#from');

const chageSpan = () => {
    const spanEl = document.querySelector('span');
    spanEl.innerText = inputFrom.value;
}

inputFrom.addEventListener('input', chageSpan);

/*
    2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'.
*/
console.log('Task 2');
const messageEl = document.querySelector('.message');
document.querySelector('.messageBtn').addEventListener('click', () => {
    messageEl.style.visibility = 'visible';
    messageEl.classList.add('animate__animated', 'animate__fadeInLeftBig');
});

/*
    3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/
console.log('Task 3');
const formEl = document.querySelector('form');
const inputsEls = formEl.querySelectorAll('.form-control');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    inputsEls.forEach(el => {
        console.log(el.value);
        if (el.value === '') {
            el.classList.add('error');
        }
    })
})

formEl.addEventListener('input', event => {
    if (!event.target.classList.contains('form-control')) {
        return;
    }
    event.target.value === '' ? event.target.classList.add('error') : event.target.classList.remove('error');
});

