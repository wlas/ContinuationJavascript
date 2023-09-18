/*
    1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
*/
console.log('Task 1');
document.addEventListener('DOMContentLoaded', () => {
    console.log('все теги прогрузились');
})

/*
    2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
*/
console.log('Task 2');
document.addEventListener('load', () => {
    console.log('страница загрузилась');
})

/*
    3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
- Класс "super_element" присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element"
- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
- которому был совершен клик.
- Необходимо использовать делегирование.
*/
console.log('Task 3');
document.addEventListener('click', event => {
    const eCli = event.target.classList.contains('super_element')
        ? 'присутствует' : 'отсутствует';
    console.log(`Класс "super_element" ${eCli} в элементе 
            "${event.target.tagName.toLowerCase()}".`);
})

/*
    4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
*/
console.log('Task 4');
document.querySelector('textarea').addEventListener('mouseover', () => {
    console.log('Вы навели на textarea');
})

/*
    5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
*/
console.log('Task 5');
document.querySelector('ul').addEventListener('click', event => {
    if (event.target.tagName === "BUTTON") {
        console.log(event.target.textContent);
    }
})

/*
    6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
*/
console.log('Task 6');
/*
    Не знаю =( 
*/

/*
    7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
*/
console.log('Task 7');
document.querySelectorAll('li:nth-child(2n)')
    .forEach(el => el.style.backgroundColor = 'red');