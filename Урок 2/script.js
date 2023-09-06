/*
    1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
*/
console.log('Task 1');
const getEl = document.getElementById('super_link');
console.log(getEl);

/*
    2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
*/
console.log('Task 2');
const cardLink = document.querySelectorAll('.card-link');
cardLink.forEach(element => {
    element.textContent = 'ссылка';
    console.log(element);
});

/*
    3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/
console.log('Task 3');
const cardBody = document.querySelectorAll('.card-body .card-link');
cardBody.forEach(element => {
    console.log(element);
})

/*
    4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
*/
console.log('Task 4');
const firstEl = document.querySelector('[data-number="50"]');
console.log(firstEl);

/*
    5. Выведите содержимое тега title в консоль.
*/
console.log('Task 5');
const title = document.querySelector('title');
console.log(title.innerText);

/*
    6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
*/
console.log('Task 6');
const cardTitle = document.querySelector('.card-title');
console.log(cardTitle.parentElement);

/*
    7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
*/
console.log('Task 7');
const pEl = document.createElement('p');
pEl.textContent = "Привет";
const card = document.querySelector('.card .card-body');
card.before(pEl);

/*
    8. Удалите тег h6 на странице.
*/
console.log('Task 8');
const el = document.querySelector('h6');
el.remove();
