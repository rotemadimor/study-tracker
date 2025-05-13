import { SubjectTimer } from './SubjectTimer.js';

export class SubjectManager{
    static subjects = new Map();
    constructor() {
        this.subjects = new Map();
    }

    static addSubject(newSubject) {
        if (this.subjects.has(newSubject)) {
            console.log(`Subject "${newSubject}" already exists.`);
        } else {
            const newSubjectTimer = new SubjectTimer(newSubject);
            this.subjects.set(newSubject, newSubjectTimer);
    
            // Dynamically create a checkbox for the new subject
            const timersContainer = document.querySelector('.Timers');
            if (!timersContainer) {
                console.error("Timers container not found in the DOM.");
                return;
            }
    
            const subjectDiv = document.createElement('div');
            subjectDiv.classList.add('SubjectTimer');
            subjectDiv.innerHTML = `
                <h3 class="SubjectTimerName">${newSubject}</h3>
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
    
            // Append the new subject timer to the container
            timersContainer.appendChild(subjectDiv);
        }
    }
    
    static getSubjects(){return this.subjects;}
}