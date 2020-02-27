$(document).ready(function(){
    var leftb = ['Avocado', 'Orange', 'Rasberry', 'strawberry', 'lemon', 'Banana']
    var rightb =['Potato', 'Tomato', 'Salad', 'Onion']
    var leftclick = 0;
    var rightclick = 0;
    $('#btnR').click(function(){
        rightclick=1;
        leftclick = 0;
 
    })
    $('#btnL').click(function(){
        rightclick=0;
        leftclick = 1;

    })

    $('#createb').click(function(){
        if (rightclick === 1){
            var randinr = random(rightb)
            var itemr = $('<li class ="listr"></li>')
            $(itemr).text(randinr)
            $(itemr).appendTo(".righttUl")
        }
        if (leftclick === 1){
            var randinl = random(leftb)
            var iteml = $('<li class ="listr"></li>')
            $(iteml).text(randinl)
            $(iteml).appendTo(".leftUl")
        }
    })

    
})
function random(array){
    var index= Math.floor(Math.random()*array.length)
    return array[index];
}
