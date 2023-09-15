/*
    1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
*/
console.log('Task 1');
const drowEl = document.querySelectorAll('.dropdown-item');
drowEl.forEach(element => {
    element.classList.add('super-dropdown');
    console.log(element);
})


/*
    2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
*/
function btnSecondary(values) {
    let rezult = false;
    for (let index = 0; index < values.length; index++) {
        if(values[index] === 'btn-secondary'){
            values.remove(values[index]);
            rezult = true;
            break;            
        }        
    }
    if(rezult === false){
        values.add('btn-secondary');
    }   
}

console.log('Task 2');
const btnEl = document.querySelector('.btn');

btnSecondary(btnEl.classList); //Удаляет если есть btn-secondary
console.log(btnEl.classList);

btnSecondary(btnEl.classList); //Добавляет если нет btn-secondary
console.log(btnEl.classList);


/*
    3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
*/
console.log('Task 3');
const drMenuEl = document.querySelector('.dropdown-menu');
drMenuEl.classList.forEach(element => {
    if(element === 'menu'){
        drMenuEl.classList.remove('dropdown-menu');
    }    
})
console.log(drMenuEl);

/*
    4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`
*/
console.log('Task 4');
const drEl = document.querySelectorAll('.dropdown');
let divEl;
drEl.forEach(element => {
    if(element.localName === 'div'){
        divEl = element;
    }
})
divEl.insertAdjacentHTML("afterend", `<a href="#">link</a>`);

/*
    5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
*/
console.log('Task 5');
const drMBtnEl = document.getElementById("dropdownMenuButton");
drMBtnEl.id = 'superDropdown';
console.log(drMBtnEl);

/*
    6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
*/
console.log('Task 6');
const ariaEl = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
ariaEl.setAttribute('data-dd','3');
console.log(ariaEl);

/*
    7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/
console.log('Task 7');
const togEl = document.querySelector('.dropdown-toggle');
togEl.removeAttribute('type');
console.log(togEl);

