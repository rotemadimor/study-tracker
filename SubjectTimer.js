import { ToDoList } from "./ToDoList";

export class SubjectTimer{
    subjectName = "subject";
    divColor ="#FEFAE0";
    timeSpentOnSubject = 0;
    
    
    constructor(subjectName) {
        this.subjectName = subjectName;
        this.divColor ="#FEFAE0";
        this.timeSpentOnSubject = 0;
        var timersContainer = document.querySelector(".Timers");
        
        var newSubjectTimerDiv = document.createElement("div");
        newSubjectTimerDiv.className = "SubjectTimer";
        newSubjectTimerDiv.style.backgroundColor = this.divColor;

        var title = document.createElement("h3");
        title.className = "SubjectTimerName";
        title.textContent = this.subjectName;

        var firstCheckbox = document.createElement("input");
        firstCheckbox.type = "checkbox";

        var newDivToDoList = new ToDoList();

        timersContainer.append(newSubjectTimerDiv);
        newSubjectTimerDiv.appendChild(title);
        newSubjectTimerDiv.append(newDivToDoList);
    }

    setDivColor(newColor){this.divColor = newColor;}
    getDivColor(){return this.divColor;}

}