// ишем кнопку по ID
const burger = document.querySelector('#burger');
const navGroup = document.querySelector('#nav__group');

//прослушка событитя по клику
burger.addEventListener('click', function () {
    //добавляем и удалаяем  класс open по клику на кнопку
    burger.classList.toggle('open');
    navGroup.classList.toggle('open');
});
