
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        console.log('hello my name is ${this.name}');
    }

}
// INSTRUCTOR
class Instructor extends Person {
    constuctor() {
        super();
        this.specialty = 
        this.favLanguage =
        catchPhrase =
    }
    demo(subject) {
        console.log('Today we are learning about ${subject}');
    }
    grade(student) {
        console.log('${student.name} receives a perfect score on ${subject}');
    }
}

// STUDENT

class Student extends Person {
    constructor() {
        super();
        this.previousBackground =
        this.className = 
        this.favSubjects = 
    }

    listsSubjects() {
        console.log(favSubjects);
    }

    PRAssignment(subject) {
        console.log('student.name');
    }

    springChallenge(subject) {
        console.log('student.name has begun sprint challenge on ${subject}');
    }
}

// PROJECT MANAGER

class ProjectManagers extends Instructor {
    constuctor() {
        super();
        this.gradClassName = 
        this.favInstuctor = 
    }

    standUp(channel) {
        console.log('${name} announces to ${channel} standy times!');
    }

    debugsCode(Student, subject) {
        console.log('${name debugs ${student.name}\'s code on ${subject}}');
    }
}
