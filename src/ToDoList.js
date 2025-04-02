export class ToDoList{
    btn_addCheckbox;

    constructor(){
        btn_addCheckbox = document.createElement("button");
        btn_addCheckbox.textContent = "add a checkbox";
        addCheckBoxInToDoList();
        this.appendChild(btn_addCheckbox);
        this.appendChild(firstCheckbox);
    }

    addCheckBoxInToDoList(){ 
        this.btn_addCheckbox.addEventListener("click", function(){
            var newCheckbox = document.createElement("input");
            newCheckbox.type = "checkbox";
            this.appendChild(newCheckbox);
        });
    }
}