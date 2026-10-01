// Basic Functions

// 1.
function hello() {
    console.log("Hello Everyone");
}

hello()

// 2.
function welcome() {
    console.log("Welcome to JavaScript");
}

welcome()

// 3.
function navi() {
    console.log("Name: Thangapandi");
}

navi()

// 4.
function message() {
    console.log("Hello World");
    console.log("Welcome to JavaScript");
    console.log("Functions");
}

message()

// 5.
function numbers() {
    for(i=1; i <= 5; i++) {
        console.log(i);
    }
}

numbers()

// 6.
function check() {
    if(5===5) {
        console.log("condition is true");
    }
}

check()

// 7.
function details() {
    console.log("Name: Thangapandi");
    console.log("Qualification: BE");
    console.log("Role: Frontend Developer");
}

details()

// 8.
function company() {
    console.log("Company Name: Stackly")
}

company()

// 9.
// Create a function
function welcomeUser() {
    console.log("Welcome User");
}

welcomeUser()
welcomeUser()
welcomeUser()

// 10.
function one() {
    console.log("First Function")
}

one()

function two() {
    console.log("second Function")
}

two()


// Parameters & Arguments

// 11.
function userName(name) {
    console.log(name);
}

userName("Thangapandi")

// 12.
function details(name,city) {
    console.log("name :", name);
    console.log("city :", city);
}

details("Thangapandi", "Chennai")

// 13.
function add(a, b) {
    console.log(a + b);
}

add(10, 16)

// 14.
function sub(a, b) {
    console.log(a - b);
}

sub(35, 25)

// 15.
function multiply(a, b) {
    console.log(a * b);
}

multiply(20, 6)

// 16.
function divide(a, b) {
    console.log(a / b);
}

divide(40, 8)

// 17.
function student(name,age) {
    console.log("Student Name :", name);
    console.log("Student Age :", age);
}

student("Thangapandi",25)

// 18.
function employee(name, role, salary) {
    console.log("Employee Name :", name);
    console.log("Employee Role :", role);
    console.log("Employee Salary :", salary);
}

employee("Thangapandi", 25, 30000)

// 19.
function products(name,quantity,price,description) {
    console.log("Product Name :", name);
    console.log("Product Quantity :", quantity);
    console.log("Product Price :", price);
    console.log("Product Description :", description);
}

products("Samsung", 8, 69999, "Samsung S25")

// 20.
function employeeDetails(name, age, role, experience, salary, location) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Role: " + role);
    console.log("Experience: " + experience);
    console.log("Salary: " + salary);
    console.log("Location: " + location);
}

employeeDetails("Thangapandi", 25, "Frontend Developer", 1, 25000, "Chennai")



// Default Parameters

// 21.
function student(name, department="CSE", cgpa) {
    console.log("name :", name);
    console.log("department :", department);
    console.log("cgpa :", cgpa);
}

student("Thangapandi", "ECE", 8)

// 22.
function user(name, age = 18) {
    console.log(name);
    console.log(age);
}

user("Thangapandi")

// 23.
function employee(name, role = "Developer") {
    console.log(name);
    console.log(role);
}

employee("Thangapandi")

// 24.
function form(name, department, cgpa, disability = "no") {
    console.log(name);
    console.log(department);
    console.log(cgpa);
    console.log(disability);
}

form("Thangapandi","ECE",8)
form("John","CSE",9,"yes")

// 25.
function userDetail(name,age,location = "chennai") {
    console.log(name);
    console.log(age);
    console.log(location);
}

userDetail("John", 25)



// Return

// 26.
function addition(num1, num2) {
    return num1 + num2;
}

let result1 = addition(10, 20);
console.log("Addition: " + result1);

// 27.
function subtraction(num3, num4) {
    return num3 - num4;
}

let result2 = subtraction(20, 10);
console.log("Subtraction: " + result2);

// 28.
function multiplication(num5, num6) {
    return num5 * num6;
}

let result3 = multiplication(15, 5);
console.log("Multiplication: " + result3);

// 29.
function division(num7, num8) {
    return num7 / num8;
}

let result4 = division(20, 5);
console.log("Division: " + result4);

// 30.
function salary() {
    return 40000;
}

let salaryDetails = salary();
console.log(salaryDetails);

// 31.
function employeeSalary(salary) {
    return salary;
}

let salaryDetails2 = employeeSalary(30000);
console.log(salaryDetails2);

// 32.
function userName() {
    return "Thangapandi";
}

let name1 = userName();
console.log(name1);

// 33.
function studentMarks(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}

let Result = studentMarks(75);
console.log(Result);

// 34.
function calculation(price, discount) {
    return price * (discount / 100);
}

let discountValue = calculation(1000, 10);
console.log(discountValue);

// 35. 
function sum(c, d) {
    return c + d;
}

function multiplication2(e) {
    return e * 2;
}

let additionValue = sum(10, 20);
let resultValue = multiplication2(additionValue);

console.log(resultValue);



// Outer Scope

// 36.
let companyName = "Stackly";

function printCompany() {
    console.log(companyName);
}

printCompany();

// 37.
let employee2 = {
    name: "Thangapandi",
    designation: "Frontend Developer"
};

function displayEmployee() {
    console.log("Name: " + employee2.name);
    console.log("Designation: " + employee2.designation);
}

displayEmployee();

// 38.
let empSalary = 40000;

function calculateSalary() {
    let bonus = 5000;
    let totalSalary = empSalary + bonus;

    console.log("Total Salary: " + totalSalary);
}

calculateSalary();

// 39.
let employeeDetails2 = {
    name: "Thangapandi",
    age: 25,
    role: "Frontend Developer",
    experience: 1,
    location: "Chennai"
};

function printDetails() {
    console.log("Name: " + employeeDetails2.name);
    console.log("Age: " + employeeDetails2.age);
    console.log("Role: " + employeeDetails2.role);
    console.log("Experience: " + employeeDetails2.experience);
    console.log("Location: " + employeeDetails2.location);
}

printDetails();

// 40.
let messageScope = "Welcome to JavaScript";

function firstFunction() {
    console.log("First Function: " + messageScope);
}

function secondFunction() {
    console.log("Second Function: " + messageScope);
}

firstFunction();
secondFunction();



// Named, Anonymous & Arrow Functions

// 41.
function Name4(name) {
    console.log(name);
}

Name4("Thangapandi");

// 42.
let messgae3 = function() {
    console.log("Welcome to JavaScript!");
};

messgae3();

// 43.
let employeeRole = (role) => {
    console.log(role);
};

employeeRole("Frontend Developer");

// 44.
let addition3 = (a1, a2) => {
    return a1 + a2;
};

let additionValues = addition3(30, 20);

console.log(additionValues);

// 45.
function named(a, b) {
    return a + b;
}

console.log(named(10, 12));

let anonymous = function(a, b) {
    return a + b;
};

console.log(anonymous(10, 14));

let arrow = (a, b) => {
    return a + b;
};

console.log(arrow(10, 18));



// IIFE

// 46.
(function() {
    console.log("Hello JavaScript");
})();

// 47.
(function(name) {
    console.log("Hello " + name);
})("Thangapandi");

// 48.
(function(product, price) {
    console.log("Special Offer! Get " + product + " on " + price + "% discount");
})("Mobiles", 20);



// Callback & Higher-Order Functions

// 49.
function addtwo(callback, a, b) {
    let result = a + b;

    console.log("Addition:", result);

    callback(75, 40);
}
function displaycallBack(a, b) {
    console.log(a);
    console.log(b);
}
addtwo(displaycallBack, 100, 80);

// 50.
function addValues(callback, a, b) {
    let result = a + b;
    console.log("Addition:", result);
    callback(a, b);
}

function subValues(a, b) {
    console.log("Subtraction:", a - b);
}

addValues(subValues, 55, 30);

