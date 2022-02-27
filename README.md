# Testing Setup

## Problem Solved by this setup:
- Testing Algorithms with multiple datasets using various Work-in-progress/variations of Functions.
- Goodbye `console.log()` (at least for returning value from functions from large datasets)


### How to use?
- Fork/copy the Test Function to a node project folder.
- Require in file using `const Test = require("../path/Test.js)`


### Syntax
```
const Test = require("../path/Test.js)
const dataArray = [...ArrayOfInputData];
const testFunctions = [functionName1, functionName2, functionName3];
Test(dataArray, testFunctions);
```


#### Arguments:

- `dataArray` is an Array of input data that the functions take in as arguments
- `functionsArray` is an Array containing the function names you want to include in the test.


```
/****************************************************************************************************/
/* Example Functions */
/****************************************************************************************************/
const stringify = array => console.log(dataArray.join(","));
const bubbleSort = array => {
    const arr = [...array];
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
const sum = array => ((a, b) => a + b, 0);


/****************************************************************************************************/
/* Testing Setup */
/****************************************************************************************************/

const dataArray = [ // Enter your data here,
    [62, 15, 24, 82, 43, 52, 112, 74, 96, 101, 31, 123],
    [72, 33, 15, 996, 741, 224, 362, 1201, 42, 112, 233, 112]
];
const testFunctions = [stringify, bubbleSort, sum]; //separate functions with commas


/****************************************************************************************************/
/* Test Function */
/****************************************************************************************************/

const Test = (dataArray, functionsArray) => {
    const recursiveTest = (arr, indx) => {
        let i = indx;
        if(i === arr.length) return;
        /* Using C-style for loop */
        for(let j = 0; j < functionsArray.length; j++) {
            console.log({[functionsArray[j].name] : functionsArray[j](arr[i])});
        }
        // functionsArray.forEach((f, j) => console.log( {[f.name]: f(dataArray[i])} )); // Alternate
        i++;
        return recursiveTest(arr, i);
    }
    return recursiveTest(dataArray, 0);
}

Test(dataArray, testFunctions);

module.exports = Test
```


#### Limitations:

- Currently cannot take more than one argument for the function. Can easily be avoided by ensuring while writing the test functions, multiple arguments are passed in as a single object (or array).
(You can change back during production)


#### Dealing with Limitations:
It is very easy to deal with the above limitation by using Array/Object deconstructuring with just one additional statement.


**Production Version**
```
const func = (array, indx, max) => {
    // Do something with them...
}
```

**Test Version**
```
nestedObjWithAllArguments = {array: [TestItem, TestItem2,...], index = 0, max = 25};
nestedArrayWithAllArguments = [[Test Item, Test Item2,...], 0, 25]

const func = nestedObjWithAllArguments => {

    // Using Object Destructuring to extract all arguments
    const {array, index, max} = nestedObjWithAllArguments 

    return console.log({array, index, max});
}

const func2 = nestedArrayWithAllArguments => {

    // Using Array Destructuring to extract all arguments
    const [array, index, max] = nestedArrayWithAllArguments;

    return console.log({array, index, max});
}

/* Test Setup */
const Test = require("../path/Test.js)
const dataArray = [nestedObjWithAllArguments];
const testFunctions = [func, func2];
Test(dataArray, testFunctions);
```