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
/* Test Function to execute every iteration of Data against each and every function */
/****************************************************************************************************/

const Test = (dataArray, functionsArray) => {
    const recursiveTest = (arr, indx) => {
        let i = indx;
        if(i === arr.length) return;
        /* Using C-style for loop */
        for(let j = 0; j < functionsArray.length; j++) {
            console.log({[functionsArray[j].name] : functionsArray[j](arr[i])});
        }
        // functionsArray.forEach((f, j) => console.log( {[f.name]: f(dataArray[i])} )); //Alternate
        i++;
        return recursiveTest(arr, i);
    }
    return recursiveTest(dataArray, 0);
}

Test(dataArray, testFunctions);

module.exports = Test