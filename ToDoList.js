export class ToDoList{
    btn_addCheckbox;

    constructor(){
        var btn_addCheckbox = document.createElement("button");
        btn_addCheckbox.textContent = "add a checkbox";
        addCheckBoxInToDoList(btn_addCheckbox);
        this.appendChild(btn_addCheckbox);
        this.appendChild(firstCheckbox);
    }

    addCheckBoxInToDoList(btn_addCheckbox){ 
        btn_addCheckbox.addEventListener("click", function(){
            var newCheckbox = document.createElement("input");
            newCheckbox.type = "checkbox";
            this.appendChild(newCheckbox);
        });
    }
}