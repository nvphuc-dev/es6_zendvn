// OPP - Inheritance
class Person {
	constructor(name, code, age){
		this.name = name;
		this.code = code;
		this.age = age;
	}

	showInfo(){
		console.log(this.name + " - " + this.code + " - " + this.getAge());
	}

	getAge(){
		let today = new Date();
		let year = today.getFullYear();
		return year - this.age;
	}
}

class Student extends Person {
	constructor(name, code, age, score){
		super(name, code, age);
		this.score = score;
	}

	showInfo(){
		super.showInfo() + console.log(" - " + this.score);
	}
}

let personObj = new Person("Teresa Teng", "A1250", 1980);
personObj.showInfo();

let studentObj = new Student("Tưởng Hân", "A1251", 1985, 80);
studentObj.showInfo();