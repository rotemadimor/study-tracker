import { SubjectManager } from './SubjectManager.js';

var subjectSelected = document.getElementById("subjectChosen");
var submitSubject = document.getElementById("submitSubject");


document.addEventListener("DOMContentLoaded", () => {
    submitSubject.addEventListener("click", function() {
        SubjectManager.addSubject(subjectSelected.textContent);
        console.log("Subject added: " + subjectSelected.textContent);
        console.log("All subjects: " + SubjectManager.getSubjects());
    });
});
