// OPP - Class
class Student{
	constructor(code, name, age){
		this.code = code;
		this.name = name;
		this.age = age;
	}
	
	showInfo(){
		return this.code + " - " + this.name + " - " + this.getAge();
	}

	getAge(){
		let today = new Date();
		let year = today.getFullYear();
		return year - this.age;
	}
}
// let studentOjb = new Student("SV001", "Kenvin", 1987);
// console.log(studentOjb.showInfo());