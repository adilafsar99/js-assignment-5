// ****** Chapter 14-16 ******
// Question 1
//var studentNames = [];

//Question 2
//var studentNames = new Array();

//Question 3
//var stringArray = ["a string"];

//Question 4
//var numberArray = [1];

//Question 5
//var booleanArray = [false];

//Question 6
//var mixedArray = ["string", 1, false];

var taskNumber = +prompt("Enter the task number to run the task you want to check: (7-15)")
if (taskNumber === 7) {
//Question 7
var eduQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("Qualifications:<br /><br />");
for (var i = 0; i < eduQualifications.length; i++) {
			 document.write((i + 1) + ") " + eduQualifications[i] + "<br />");
}
}

else if (taskNumber === 8) {
//Question 8
var totalMarks = 500;
var studentNames = [];
var studentName = prompt("Enter the name of first student: ");
while (studentName === "" || studentName === null) {
				alert("Please enter a name!");
				studentName = prompt("Enter the name of first student: ");
}
studentNames.push(studentName);

var studentName = prompt("Enter the name of second student: ");
while (studentName === "" || studentName === null) {
				alert("Please enter a name!");
				studentName = prompt("Enter the name of second student: ");
}
studentNames.push(studentName);

var studentName = prompt("Enter the name of third student: ");
while (studentName === "" || studentName === null) {
				alert("Please enter a name!");
				studentName = prompt("Enter the name of third student: ");
}
studentNames.push(studentName);

var studentNumbers = [];
var studentNumber = +prompt("Enter the numbers of first student: ");
while (studentNumber < 0 || studentNumber > totalMarks) {
				alert("Your numbers are invalid!");
				studentNumber = +prompt("Enter the numbers of first student: ");
}
studentNumbers.push(studentNumber);

var studentNumber = +prompt("Enter the numbers of second student: ")
while (studentNumber < 0 || studentNumber > totalMarks) {
 			 alert("Your numbers are invalid!");
				 studentNumber = +prompt("Enter the numbers of second student: ");
}
studentNumbers.push(studentNumber);

var studentNumber = +prompt("Enter the numbers of third student: ");
while (studentNumber < 0 || studentNumber > totalMarks) {
			 alert("Your numbers are invalid!");
			 studentNumber = +prompt("Enter the numbers of third student: ");
}
studentNumbers.push(studentNumber);

var percentage;
for (var i = 0; i < studentNames.length; i++) {
   document.write("Score of " + studentNames[i] + " is " + studentNumbers[i] + ". Percentage: " + studentNumbers[i] * 100 / totalMarks + "%<br />");
}
}

else if (taskNumber === 9) {
//Question 9
var colorNames = ["Red", "Blue", "Green", "Yellow", "Orange"];
var userColor = prompt(colorNames + "\n\n" + "What new color you want at the start?");
for (var i = 0; i < colorNames.length; i++) {
				while (userColor === colorNames[i]) {
								alert("This color is already present!");
								userColor = prompt(colorNames + "\n\n" + "What new color you want at the start?");
								i = 0;
				}
}
colorNames.unshift(userColor);
userColor = prompt(colorNames + "\n" + "What new color you want at the end?");
for (var i = 0; i < colorNames.length; i++) {
				while (userColor === colorNames[i]) {
								alert("This color is already present!");
								userColor = prompt(colorNames + "\n\n" + "What new color you want at the end?");
								i = 0;
				}
}
colorNames.push(userColor);
alert(colorNames);
var newColor1 = "Silver", newColor2 = "Golden";
colorNames.unshift(newColor1, newColor2);
alert("I added two new colors: " + newColor1 + " and " + newColor2 + " at the beginning!" + "\n" + colorNames);
colorNames.shift();
alert("I removed the first color!" + "\n" + colorNames);
colorNames.pop();
alert("I removed the last color!" + "\n" + colorNames);
var userIndex = +prompt(colorNames + "\nAt which number you want a new color?");
while (userIndex < 1 || userIndex > colorNames.length + 1) {
				alert("No color is present at that number!");
				userIndex = +prompt(colorNames + "\nAt which number you want a new color?");
}
--userIndex;
userColor = prompt(colorNames + "\nWhat new color you want?");
for (var i = 0; i < colorNames.length; i++) {
				while (userColor === colorNames[i]) {
								alert("This color is already present!");
								userColor = prompt(colorNames + "\nWhat new color do you want?");
								i = 0;
				}
}
colorNames.splice(userIndex, 0, userColor);
var userIndex = +prompt(colorNames + "\nAt which number you want to delete color?");
while (userIndex < 1 || userIndex > colorNames.length) {
				alert("No color is present at that number!");
				userIndex = +prompt(colorNames + "\nAt which number you want to delete a color?");
}
--userIndex;
var deletedColor = +prompt(colorNames + "\nHow many colors you want to delete?");
while (userIndex + deletedColor > colorNames.length || deletedColor < 1) {
				if (userIndex + deletedColor > colorNames.length) {
								alert("This many colors are not remaining!");
								deletedColor = +prompt(colorNames + "\nHow many colors you want to delete?");
				}
				if (deletedColor < 1) {
								alert("Please select atleast one number!");
								deletedColor = +prompt(colorNames + "\nHow many colors you want to delete?");
   }
}
colorNames.splice(userIndex, deletedColor);
if (colorNames.length === 0) {
				alert("All colors have been removed!");
}
else {
   alert(colorNames);
}
}

else if (taskNumber === 10) {
//Question 10
var studentNumbers = [];
var studentNumber = +prompt("Enter the numbers of first student: ");
while (studentNumber < 0) {
			 alert("Your marks are impossible!");
			 studentNumber = +prompt("Enter the numbers of first student: ");
}
studentNumbers.push(studentNumber);

var studentNumber = +prompt("Enter the numbers of second student: ")
while (studentNumber < 0) {
				alert("Your marks are impossible!");
				studentNumber = +prompt("Enter the numbers of second student: ");
}
studentNumbers.push(studentNumber);


var studentNumber = +prompt("Enter the numbers of third student: ");
while (studentNumber < 0) {
				alert("Your marks are impossible!");
				studentNumber = +prompt("Enter the numbers of third student: ");
}
studentNumbers.push(studentNumber);

var studentNumber = +prompt("Enter the numbers of fourth student: ");
while (studentNumber < 0) {
				alert("Your marks are impossible!");
				studentNumber = +prompt("Enter the numbers of fourth student: ");
}
studentNumbers.push(studentNumber);

document.write("Scores of Students: " + studentNumbers + "<br />");
document.write("Ordered Scores of Students: " + studentNumbers.sort(function(a,b) {return a-b}));
}

else if (taskNumber === 11) {
//Question 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2);
document.write("Cities List:<br />" + cities + "<br /><br />");
document.write("Selected Cities List:<br />" + selectedCities + "<br />");
}

else if (taskNumber === 12) {
//Question 12
var arr = ["This ", "is ", "my ", "cat"];
document.write("Array:<br />");
document.write(arr + "<br /><br />");
document.write("String:<br />");
document.write(arr.join(""));
}

else if (taskNumber === 13) {
//Question 13
var devices = [];
devices[0] = "keyboard";
devices[1] = "mouse";
devices[2] = "printer";
devices[3] = "monitor";
document.write("Devices:<br />");
document.write(devices + "<br /><br />");
for (var i = 0; i < devices.length; i++) {
			document.write("Out:<br />");
			document.write(devices[i] + "<br />");
}
}

else if (taskNumber === 14) {
//Question 14
var devices = [];
devices[0] = "keyboard";
devices[1] = "mouse";
devices[2] = "printer";
devices[3] = "monitor";
document.write("Devices:<br />");
document.write(devices + "<br /><br />");
devices.reverse();
for (var i = 0; i < devices.length; i++) {
		 document.write("Out:<br />");
		 document.write(devices[i] + "<br />");
}
}

else if (taskNumber === 15) {
//Question 15
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haeir"];
document.write("Choose your preferred manufacturer:<br />")
document.write("<form>");
document.write("<select>");
document.write("<option>" + manufacturers[0] +"</option>");
document.write("<option>" + manufacturers[1] +"</option>");
document.write("<option selected>" + manufacturers[2] +"</option>");
document.write("<option>" + manufacturers[3] +"</option>");
document.write("<option>" + manufacturers[4] +"</option>");
document.write("<option>" + manufacturers[5] +"</option>");
document.write("</select>");
document.write("</form>");
}

else {
				alert("Invalid Input!");
}