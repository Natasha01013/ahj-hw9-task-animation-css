export function collapse() {
    document.addEventListener('DOMContentLoaded', () => {
    const collapsibleButtons = document.querySelectorAll('.collapsible-btn');
    const hideAllButton = document.getElementById('hide-all-btn');

    collapsibleButtons.forEach(button => { // button - функция, которая выполняется для каждого элемента (кнопки) в коллекции
        button.addEventListener('click', () => {
            const collapsible = button.closest('.collapsible'); //ищем ближайший родительский элемент кнопки, который имеет класс collapsible
            if(collapsible){ 
                collapsible.classList.toggle('open');
            }
        });
    });

    hideAllButton.addEventListener('click', () => {
        const collapsibles = document.querySelectorAll('.collapsible');
        collapsibles.forEach(collapsible => {
            collapsible.classList.remove('open');
        });
    });
    });
}