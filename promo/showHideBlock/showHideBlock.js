//поиск кнопки по ID
const button = document.querySelector('#button');
//поиск текста по ID
const text = document.querySelector('#text');

//прослушка события по клику
button.addEventListener('click', function () {
    //удаляем и добавляем класс none
    text.classList.toggle('none');

    //проверяем если в text есть класс none
    if (text.classList.contains('none')) {
        //то text скрыт и на button выводится 'Открыть блок'
        button.textContent = 'Открыть блок';
    } else {
        //то text не скрыт и на button выводится 'Закрыть блок'
        button.textContent = 'Закрыть блок';
    }

    // if (text.classList.toggle('none')) {
    //     button.textContent = 'Открыть блок';
    // } else {
    //     button.textContent = 'Закрыть блок';
    // }
});
