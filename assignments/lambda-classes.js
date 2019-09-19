// CODE here for your Lambda Classes

class Person {
  constructor(attr) {
    this.name = attr.name;
    this.location = attr.location;
    this.age = attr.age;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.forEach(function(subject) {
      console.log(subject);
    });
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.className;
    this.favInstructor = attr.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const anthony = new Student({
  name: "Anthony",
  location: "Las Vegas",
  age: 24,
  favLanguage: "Python",
  specialty: "Back-end development",
  catchPhrase: "Life happens",
  previousBackground: "Manager at a contact center",
  className: "WEB24",
  favSubjects: ["HTML", "CSS", "JavaScript"]
});

const don = new ProjectManager({
  name: "Donald",
  location: "Louisiana",
  age: 41,
  favLanguage: "JavaScript",
  specialty: "React",
  catchPhrase: "Trust the process",
  gradClassName: "WEB12",
  favInstructor: "Brit Hemming"
});

console.log(anthony.speak());
console.log(fred.demo("React"));
console.log(fred.grade(anthony, "React"));
anthony.listsSubjects();
console.log(anthony.PRAssignment("React"));
console.log(anthony.sprintChallenge("React"));
console.log(don.standUp("web_lecture"));
console.log(don.debugsCode(anthony, "React"));
