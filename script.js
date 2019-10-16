function addNewItem () {
    var input = document.querySelector('input'),
        btn = document.querySelector('.btn'),
        list = document.querySelector('.todo-list'),
        listItem = document.getElementsByClassName('todo-list__item');
        
    btn.addEventListener('click', function() {
        if (input.value === "") {
            alert("Не введена задача. Заполните поле");
            return false;
        }

        var elem = document.createElement('li');
        elem.classList.add('todo-list__item');
        elem.textContent = input.value;
        list.append(elem);
        input.value = "";
    });
    
    list.addEventListener('click', toggleListItem);

    function toggleListItem(e) {
        var elem = e.target;

        if (elem.classList.contains('todo-list__item')) {
            elem.classList.toggle('toggle-line');
        }
    }
}

addNewItem();