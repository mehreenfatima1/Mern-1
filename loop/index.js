

function loop() {
    for (var i = 1; i <= 6; i++) {
        (function(number){
        setTimeout(function(){
            console.log(number);
        }, 1000 * number)})(i)
    }
}

loop();

