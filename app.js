// var arr = [[],[],[]];
// arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(arr[0] + "<br>");
// document.write(arr[1] + "<br>");
// document.write(arr[1]);

// question3
// for (i=1; i<11; i++){
//     document.write(i + "<br>");
// }

// question4
// var num = prompt("enter a number to show its multiplication table");
// var len = prompt("enter length of its multiplication");
// document.write("Multiplication table of " + num + "<br>");
// document.write("length " + len + "<br>");
// for(i=1; i<=len; i++){

//     document.write(num + " " + "x" + " " + i + " " + "=" + " " + num*i + "<br>");
// }

// question5
// var fruits = ["apple","banana","mango","orange","strawberry"];
// for(i=0; i<5; i++){
//     document.write(fruits[i] + "<br>");

// }

// question6
// a
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// document.write("Counting: " +  "<br>" + arr);
// b
// var rev = arr.reverse();
// document.write("Reverse Counting: " + rev);
// c
// document.write("Even: ");
// for (i=0; i<=10; i++){
//     if (i%2==0){
//         document.write(i + ",");
//     }
// }
// d
// document.write("Odd: ");
// for (i = 0; i <= 20; i++) {
//     if (i % 2 != 0) {
//         document.write(i + ",");
//     }
// }
// e
// document.write("Series: ");
// for (i=1; i<=20; i++){
//     if (i%2==0){
//         document.write(i + "k" + ",");
//     }
// }

// question7
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userItem = prompt("Welcome to Friend's Bakery. What do you want to order?")
// if(userItem === "cake"){
//     document.write("Cake is available at index 0 in our Bakery");
// }else if(userItem === "apple pie"){
//     document.write("apple pie is available at index 1 in our Bakery");
// }else if(userItem === "cookie"){
//     document.write("cookie is available at index 2 in our Bakery");
// }else if(userItem === "chips"){
//     document.write("chips is available at index 3 in our Bakery");
// }else if(userItem === "patties"){
//     document.write("patties is available at index 4 in our Bakery");
// }else{
//     document.write("We are sorry." + userItem + " is not available in our bakery");
// }
// question8
// var arr = [24,53,78,91,12];
// document.write("Array Items: " + arr + "<br>");
// var largest = arr[0];
// for (var i=0; i<arr.length; i++){
//     if (arr[i]>largest){
//         largest = arr[i];
//     }
// }document.write("The largest number in the array is: " + largest);
// question9
// var arr = [24,53,78,91,12];
// document.write("Array Items: " + arr + "<br>");
// var smallest = arr[0];
// for (var i=0; i<arr.length; i++){
//     if (arr[i]<smallest){
//         smallest = arr[i];
//     }
// }document.write("The largest number in the array is: " + smallest);

// question10
// for(var i=1; i<=20; i++){
//     var multiples = 5 * i;
//     document.write(multiples);
// }