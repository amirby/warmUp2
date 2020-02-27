/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of
     an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */
function mysteryRange(str, nbr){
    var array =[];
    var range=[];
    for (var i = 0 ; i < str.length ; i++){
        if ((str[i]==='1') && (i != str.length-1)){
            array.push(Number(str[i]+str[i+1]))
            i+=1
        } else {
            array.push(Number(str[i]))       
        }
    }
    var min= array[0];
    var max= array[0];
    for (var i = 1 ; i < array.length ; i++){
        if (array[i]>max){
            max = array[i]
        }
        if (array[i]<min){
            min = array[i]
        }
    }
    range.push(min,max);
    return range
}
