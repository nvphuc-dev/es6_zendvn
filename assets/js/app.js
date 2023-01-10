// Block Scope
/*
Block FOR > Block IF > Block WHILE
for(){
	if(){
		while(){
			
		}
	}
}
*/

// VAR
/*
var score = 100;
if(score > 50){
	var msg = "WIN";
	console.log(msg);
}
console.log(score);
console.log(msg);
*/

// LET
/*
let score = 100;
let msg = "";
if(score > 50){
	// let msg = "WIN";
	msg = "WIN";
	console.log(msg);
}
console.log(score);
console.log(msg);
*/

// Test let
let content = document.getElementById("draw");
function drawShape(){
	content.innerHTML = "";
	for(let i = 1; i <=10; i++){
		let el = document.createElement("p");
		el.innerHTML = i;
		el.onclick = function(){
			alert("Select #" + i);
		}
		content.appendChild(el);
	}
}

function clearShape(){
	content.innerHTML = "";
}

// CONST
const COURSE_NAME = "Typescript";
// console.log(COURSE_NAME);

// TEMPLATE STRING
let todo = {
	id: 1,
	name: "Play Piano",
	status: true
};

let elTodo = document.getElementById("todo");
elTodo.innerHTML = `<p class="todo__${todo.id}">${todo.name} <i class="fa-solid fa-check ${ todo.status == false ? "invisible" : "" }"></i></p>`;

// FOR
let todoArray = [
	"Play football",
	"Coding",
	"Study Typescript"
];
// Cách 1
/*
let length = todoArray.length;
for(let i = 0; i < length; i++){
	console.log(todoArray[i]);
}
*/

// Cách 2
/*
for(let index in todoArray){
	console.log(index + ": " + todoArray[index]);
}
*/

// Cách 3
/*
for(let todo of todoArray){
	console.log(todo);
}
*/
/*
let personObj = {
	id: 1,
	name: "Kenvin Nguyen",
	email: "nvphuc.adw@gmail.com",
	age: 18
}
for(let index in personObj){
	console.log(index + ": " + personObj[index]);
}
*/

// SPREAD
// Print: "HTML", "Javascript", "PHP", "LARAVEL", "Zend", "Wordpress", "CSS", "Android", "Ios"
/*
let courseWeb = ["PHP", "LARAVEL", "Zend", "Wordpress"];
let courseMobile = ["Android", "Ios"];
let course = ["HTML", "Javascript", ...courseWeb, "CSS", ...courseMobile];
console.log(course);
*/

// DESTRUCTURING
// Case 1
/*
let arr = [122, "ES6", false];
// let id = arr[0];
// let name = arr[1];
// let free = arr[2];
let [id, name, free] = arr;
console.log(id + " - " + name + " - " + free);
*/
// Case 2
/*
let courseOjb = {
	id: 456,
	name: "ES6",
	free: false
};
// let {id, name, free} = courseOjb;
let {name, id, free} = courseOjb;
console.log(id + " - " + name + " - " + free);
*/

// FUNCTION
// default params
/*
// function showInfo(name, price){
function showInfo(name = "ES5", price = 5){
	return `Course name: ${name}, price: ${price}`;
}
let elParams = document.getElementById("defaultParams");
// elParams.innerHTML = showInfo();
elParams.innerHTML = showInfo("ES6", 8);
*/

// rest params
/*
function calculate(action, ...values){
	let result = 0;
	switch(action){
		case '+':
			for(let val of values) result += val;
			break;
		case '-':
			for(let val of values) result -= val;
			result += values[0];
			break;
	}
	return result;
}
console.log(calculate('-', 8, 3, 3, 1, 2));
*/

//Arrow Functions 01
function func01(name, age){
	return `Func01: My name is ${name}, ${age} year old.`;
};
// console.log(func01('Teng', 20));

let func02 = function(name, age){
	return `Func02: My name is ${name}, ${age} year old.`;
};
// console.log(func02('Teng', 20));

let func03 = (name, age) => {
	return `Func03: My name is ${name}, ${age} year old.`;
};
// console.log(func03('Teng', 20));

let func04 = (name, age) => `Func04: My name is ${name}, ${age} year old.`;
// console.log(func04('Teng', 20));

let func05 = name => {
	return `Func05: My name is ${name}.`;
};
// console.log(func05('Teng'));

let func06 = () => {
	return `Func06 Hello Guy.`;
};
// console.log(func06);

//Arrow Functions 02
/*
let listCourse = ['Android', 'java', 'php', 'angular'];
console.log(
	listCourse.map(course => {
		return course.toUpperCase();
	})
);

let scores = [9, 2, 8, 4, 7, 3, 1, 8];
scores.sort((x, y) => x - y);
console.log(scores);
*/

// this trong arrow function
// case 1 error
/*
let student = {
	name: 'Kenvin',
	courses: ['PHP', 'Java', 'CSS'],
	showInfo: function(){
		this.courses.forEach(function(course){
			console.log(`${this.name} study ${course}`);
		});
	}
}
*/
//case 2 _this
/*
let student = {
	name: 'Kenvin',
	courses: ['PHP', 'Java', 'CSS'],
	showInfo: function(){
		let _this = this;
		this.courses.forEach(function(course){
			console.log(`${_this.name} study ${course}`);
		});
	}
}
*/
// case 3 bind
/*
let student = {
	name: 'Kenvin',
	courses: ['PHP', 'Java', 'CSS'],
	showInfo: function(){
		this.courses.forEach(function(course){
			console.log(`${this.name} study ${course}`);
		}.bind(this));
	}
}
*/
// case 4 arrow function

let student = {
	name: 'Kenvin',
	courses: ['PHP', 'Java', 'CSS'],
	showInfo: function(){
		this.courses.forEach(course => console.log(`${this.name} study ${course}`))
	}
}
// student.showInfo();

//Enhanced
// Property value shorthand
/*
function getCourse(name, price, free){
	return {
		// name: name,
		// price: price,
		// free: free
		name,
		price,
		free
	}
}
// console.log(getCourse("ES6", 20, true));
*/

// Method Properties
/*
function getCourse(name, price, free){
	return {
		name,
		price,
		free,
		showInfo1: function(){
			console.log(`${ name + ' - ' + price + ' - ' + free}`);
		},
		showInfo2(){
			console.log(`${ name + ' - ' + price + ' - ' + free}`);
		},
		showInfo3(delimiter = " - "){
			console.log(`${ name + delimiter + price + delimiter + free}`);
		}
	}
}
var myCourse = getCourse("ES6", 20, false);
myCourse.showInfo3(" ++++ ");
console.log(myCourse);
*/

// Computed Property Name
/*
let prefix = "support_";
let bootstrapSupport = {
	[prefix + "chrome"]: true,
	[prefix + "firefox"]: true,
	[prefix + "ie"]: false
}
console.log(bootstrapSupport);
*/

// OPP
