// CODE here for your Lambda Classes

class Person {
  constructor(attr) {
    this.name = attr.name;
    this.location = attr.location;
    this.age = attr.age;
  }

  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}.`;
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
  favSubjects: ["HTML", "CSS", "Javascript"]
});

console.log(fred.grade(anthony, "bacon"));
