class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  
  get name() {
    return this._name;
  }
  
  get level() {
    return this._level;
  }
  
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = numberIn;
    } else {
      return 'Invalid input: numberOfStudents must be set to a Number.';
    }
  }
  
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  }
  
  static pickSubstituteTeacher(substituteTeachers) {
    let randomIndex = Math.floor(Math.random() * (substituteTeachers.length - 1));
    return substituteTeachers[randomIndex];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = '';
  }
  
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name) {
    super(name);
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'High', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  get sportsTeams() {
    return this._sportsTeams;
  }
}

let lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

let alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);

class SchoolCatalog {
  constructor() {
    this._primary = [];
    this._middle = [];
    this._high = [];
  }
  
  get primary() {
    return this._primary;
  }
  
  get middle() {
    return this._middle;
  }
  
  get high() {
    return this._high;
  }
  
  addPrimarySchool(newSchool) {
    this._primary.push(newSchool);
  }
  
  addMiddleSchool(newSchool) {
    this._middle.push(newSchool);
  }
  
  addHighSchool(newSchool) {
    this._high.push(newSchool);
  }
}

let lakeviewSchoolCatalog = new SchoolCatalog();

lakeviewSchoolCatalog.addPrimarySchool(lorraineHansbury.name);
lakeviewSchoolCatalog.addHighSchool(alSmith.name);
lakeviewSchoolCatalog.addPrimarySchool('Stephen Brown');
console.log(lakeviewSchoolCatalog.primary);
