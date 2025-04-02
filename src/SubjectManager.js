import { SubjectTimer } from './SubjectTimer.js';

export class SubjectManager{
    static subjects = new Map();
    constructor() {
        this.subjects = new Map();
    }

    static addSubject(newSubject){
        if(this.subjects.has(newSubject)){
            console.log('Subject "${subjectName}" already exists.');
        }
         else{
            var newSubjectTimer = new SubjectTimer(newSubject);
            this.subjects.set(newSubject,newSubjectTimer);
        }
    }

    static addCheckBoxInToDoList(subjectTimer){
        subjectTimer.addCheckBoxInToDoList();
    }

    static getSubjects(){return this.subjects;}
}