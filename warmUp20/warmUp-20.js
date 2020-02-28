// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverse(string){
    var array = string.split(" ");
    var str = ""
    for (var i = array.length - 1 ; i >= 0 ; i--){
        if (i === 0){
            str += array[i];
        }else 
            str += array[i] + " ";
    }
    return str
}