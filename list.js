/*
@Author: Daniel Hickey
 */
//Self invoking function to declare variables with local scope.
(function() {
    var input = document.getElementById('input');
    var btn = document.getElementById('btn');

    /*List object to that holds the attributes "done"
    and "todo" storing their respective element id's.*/
    var lists = {
        todo: document.getElementById('todo'),
        done: document.getElementById('done')
    };
    console.log(input);

    /**
     * @param {string} str
     * @param {Function} onCheck
     * @returns {HTMLElement}
     */
   function createHtml(str, onCheck) {
        var element = document.createElement('li');
        var checkbox = document.createElement('input');
        var label = document.createElement('span');

        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', onCheck);
        label.textContent = str;

        element.appendChild(checkbox);
        element.appendChild(label);

       // checkbox.getElementById('input').style.size = "20oem";

        return element;
    };

    function addTask(task) {
        lists.todo.appendChild(task);
    };

    function onCheck(event) {
        var task = event.target.parentElement;
        var list = task.parentElement.id;

        lists[list === 'done' ? 'todo' : 'done'].appendChild(task);
        this.checked = false;
        input.focus();
    };

    function onInput() {
        var str = input.value.trim();

        if (str.length > 0) {
            addTask(createHtml(str, onCheck));

            input.value = '';
            input.focus();
        }
    };

    btn.addEventListener('click', onInput);
    input.addEventListener('keyup', function(event) {
        var code = event.keyCode;

        if (code === 13) {
            onInput();
        }
    });

    input.focus();
}());