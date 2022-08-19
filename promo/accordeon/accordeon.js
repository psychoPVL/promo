//поиск кнопок по ID
const accordeon = document.querySelectorAll('#accordeon');

//перебираем массив accordeon
accordeon.forEach((item) => {
    //прослушка события по клику
    item.addEventListener('click', function () {
        //удаляем, добавляем класс none у соседнего блока accordeon
        this.nextElementSibling.classList.toggle('none');
    });
});
