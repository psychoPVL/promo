//поиск табов по data атрибуту
const tabs = document.querySelectorAll('[data-tab__item]');
//поиск tabText из функции
const tabContent = document.querySelectorAll('[data-tab__text]');

//перебираем массив tabs
tabs.forEach((elem) => {
    //прослушка события по клику
    elem.addEventListener('click', function () {
        //скрыть все tabText
        tabContent.forEach((item) => {
            item.classList.add('none');
        });
        //поиск ID + поиск data атрибута
        const tabText = document.querySelector('#' + this.dataset.tab__item);
        //выбирем нужный tabText и показываем его
        tabText.classList.remove('none');
    });
});
