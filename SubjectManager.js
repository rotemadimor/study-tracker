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
        }
    }
    
    static getSubjects(){return this.subjects;}
}