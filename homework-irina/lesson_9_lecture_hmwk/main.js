
var ID = 0;

function ToDoList(todos) {
    this.todos = todos || [];
}

function ToDoItem(id, title, completed) {
    this.id = id;
    this.title = title;
    this.completed = completed || false;
}

ToDoList.prototype.render = function() {
    
    var items = this.todos;
      if(!items) {
        return;
    }
    var listHTML = '';
    items.forEach(function (item) {
        listHTML += ('<li><input type="checkbox" name="vehicle" value="Bike"'
         + (this.item.completed ? 'checked' : '')   +'>'
         + this.item.title + ' <a href="#" onclick="deleteItem('+ this.item.id +')">X</a></li>');
    });
    document.getElementById("todo-list").innerHTML = listHTML;
};

ToDoList.prototype.getCount = function() {
    var count = this.todos.length;
    document.getElementById("all-tasks").innerHTML = count;
    return '"All tascs:" + count';
};
ToDoList.prototype.getCompleted = function() {
    var counter = this.todos.length;
    for (var i = 0; i < counter; i++){
        if (!this.todos[i].completed){
            counter--;
        }
    }
    return counter;
};
ToDoList.prototype.addToDoItem = function(title){
    title = title.trim();
    if (!title) {
        alert("Please input valid title");
        return;
    }
    this.todos.push({
        id: ToDoList.ID++,
        title: title,
        completed: false
    });

    this.render();
};

function addNewItem() {
    var input = document.getElementById('new-task');
    myList.addToDoItem(input.value);
    input.value = '';
    input.focus();
}
var myList = new ToDoList();
ToDoList.ID = 0;



function addNewItem() {
    var input = document.getElementById('new-task');
    myList.addItem(input.value);
    input.value = '';
    input.focus();
}