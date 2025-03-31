export class SubjectTimer{
    subjectName = "subject";
    divColor ="#FEFAE0";
    timeSpentOnSubject = 0;

    
    constructor(subjectName) {
        this.subjectName = subjectName;
        this.divColor ="#FEFAE0";
        this.timeSpentOnSubject = 0;
        var firstdiv = document.getElementById('firstDivSubject');
        var newSubjectDiv = document.createElement("div");
        firstdiv.append(newSubjectDiv);
        newSubjectDiv.className = "SubjectTimer";
        newSubjectDiv.innerHTML = subjectName; 
    }

    setDivColor(newColor){this.divColor = newColor;}
    getDivColor(){return this.divColor;}


}