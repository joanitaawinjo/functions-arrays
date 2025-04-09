//function that takes an array of strings and returns a new array with the length of each string.
    function stringLength(strings){
        return strings.map(str => str.length);
    }
    console.log(stringLength(["Apple","Mango","Orange","Pawpaw"]));

//function that filters out and returns only the even numbers.
function evenNumbers(numbers){   
return numbers.filter(number => number %2 == 0);
} 
console.log(evenNumbers([1,2,3,4,5,6,7.8,9]));

//function that takes an array of student objects with name and score properties and returns a new array containing only the names of students who scored above 75.
    function studentScore(students){
        return students.filter(student=> student.score >75).map(student => student.name);
    }
    let array = [{name:"mary" ,score:50},
        {name:"Jackie" ,score:78},
        {name:"Bigail" ,score:70},
        {name:"Sarah" ,score:80},
        {name:"Jackson" ,score:50}]
    console.log(studentScore(array));


//function that accepts an array of numbers and returns a new array with each number squared using the map() method.
function squared(nums){
    return nums.map(item => item**2);
}    
console.log([1,2,3,4,5,6,7,8,9]);
  

//function that takes an array of mixed data types and returns a new array containing only the string elements, all converted to uppercase.
function findString(mixedData){
    return mixedData.filter(item => typeof item === 'string').map(str => str.toUpperCase());
}
console.log(findString(["a",9.0,5,"cat","dog"]));