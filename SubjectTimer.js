import { ToDoList } from "./ToDoList.js";

export class SubjectTimer{
    subjectName = "subject";
    divColor ="#FEFAE0";
    timeSpentOnSubject = 0;
    
    
    constructor(subjectName) {
        this.subjectName = subjectName;
        this.divColor ="#FEFAE0";
        this.timeSpentOnSubject = 0;
        const timersContainer = document.querySelector(".Timers");
            if (!timersContainer) {
                console.error("Timers container not found in the DOM.");
                return;
            }
    
            const subjectDiv = document.createElement('div');
            subjectDiv.classList.add('SubjectTimer');
            subjectDiv.innerHTML = `
                <h3 class="SubjectTimerName">${subjectName}</h3>
                <div class="ToDoList">
                    <button class="addCheckBoxBtn">Add a checkbox</button>
                </div>
            `;
    
            // Add event listener for dynamically adding checkboxes
            subjectDiv.querySelector('.addCheckBoxBtn').addEventListener('click', () => {
                const toDoList = subjectDiv.querySelector('.ToDoList');
                const newCheckbox = document.createElement('input');
                newCheckbox.type = 'checkbox';
                toDoList.appendChild(newCheckbox);
            });
    
            timersContainer.appendChild(subjectDiv);
    }

    setDivColor(newColor){this.divColor = newColor;}
    getDivColor(){return this.divColor;}

}