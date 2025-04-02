import { SubjectManager } from './SubjectManager.js';

var subjectSelected = document.getElementById("subjectChosen");
var btn_SubmitNewSubject = document.getElementById("submitSubject");


document.addEventListener("DOMContentLoaded", () => {
    btn_SubmitNewSubject.addEventListener("click", function() {
        SubjectManager.addSubject(subjectSelected.textContent);
        console.log(SubjectManager.getSubjects());
    });
});
