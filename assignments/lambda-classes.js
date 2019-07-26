// CODE here for your Lambda Classes
class Person{
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }

}
class Instructor extends Person{
    constructor(ins_attrs){
        super(ins_attrs);
        this.name = ins_attrs.name;
        this.age = ins_attrs.age;
        this.location = ins_attrs.location;
        }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}
class Student extends Instructor{
    constructor(stu_attrs){
        super(stu_attrs);
        this.name = stu_attrs.name;
        this.age = stu_attrs.age;
        this.location = stu_attrs.location;
    }
    listsSubjects(){
        console.log(favoriteSubjects.length);
    }
    PRAssignment(subject){
        console.log(`student.name has submitted a PR for ${subject}`);
    }
    sprintChallenge(){
        console.log(`student.name has begun sprint challenge on ${subject}`);
    }
}
class Project_Manager extends Student{
    constructor(con_attrs){
        super(con_attrs);
        this.name = con_attrs.name;
        this.age = con_attrs.age;
        this.location = con_attrs.location;
    }
    standup(chanel){
        console.log(`${name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(studen, subject){
        console.log(`${name} debugs ${student.name}'s code on ${subject}`);
    }
}


const Fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
const Shawn = new Student({
    name: 'Shawn',
    location:'New Jersey',
    age: 28,
    previousBackground: 'waiter',
    className: 'CS132',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
const Ann = new Project_Manager({
    name: 'Ann',
    location: 'Florida',
    age: 40,
    gradClassName: 'CS1',
    favInstructor: 'Fred',

});