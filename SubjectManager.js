export class SubjectManager{
    static subjects = new Set();

    static addSubject(newSubject){
        if(this.subjects.has(newSubject)){
            console.log('Subject "${subjectName}" already exists.');
        } else{
            this.subjects.add(newSubject);
        }
    }

    static getSubjects(){
        return this.subjects;
    }
}