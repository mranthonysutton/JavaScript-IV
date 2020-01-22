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
    this.grade = attr.grade;
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

  graduate() {
    if (this.grade >= 70) {
      return `Congratulations ${this.name}! You have passed with a ${this.grade}%!`;
    } else {
      return `${this.name}, unfortunately you did not pass. You need a 70% and you completed the course with a ${this.grade}%. You will need to re-take the course.`;
    }
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

  changeGrade(student) {
    if (student.grade < 70) {
      student.grade = 70;
      return `You have changed ${student.name}'s grade to ${student.grade}% so that they may graduate.`;
    } else {
      return "";
    }
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
  favSubjects: ["HTML", "CSS", "JavaScript"],
  grade: (Math.random() * 100).toFixed(2)
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

console.log(anthony.graduate());
don.changeGrade(anthony);
console.log(anthony.graduate());
