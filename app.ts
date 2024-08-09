function myArray(numbers:number[]):number[]
{
if(numbers.length==1)
{
    numbers.push(numbers[0]);
    return numbers;

}
    var result: number[] = [];  
    result.push(numbers[0]);
    result.push(numbers[numbers.length-1]);
    return result;
}
console.log(myArray([109,2,3,4,5]));
console.log(myArray([10,2,3,4,50]));
console.log(myArray([100]));

//problem 2: Find the largest number in an array
function largestNumber(numbersArray:number[]):number|number[]|string
{
var largestNum=0;
if(numbersArray.length==1)
{
    largestNum=numbersArray[0];
    return largestNum;
}

if(numbersArray.length==0)
{
    return "Array is empty";
}
    var max=numbersArray[0];
    for(var i=1;i<numbersArray.length;i++)
    {  
        if((numbersArray[i])>max)
        {
            max=numbersArray[i];
        }
    }
    return max;
}
console.log(largestNumber([-111,2,-30,4,-55]));
console.log(largestNumber([110]));

