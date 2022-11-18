function countDown(number) {
    let timer = setInterval(function() {
        number--;
        if(number <= 0) {
            clearInterval(timer);
            console.log('DONE!');
                    
        }
        else{
            console.log(number);
        }
    },1000)
}

function randomGame() {
    let counter = 0;
    let game = setInterval(function() {        
        let randomNum = Math.random();
        counter++;
        if(randomNum > .75) {
            clearInterval(game);
            console.log(`Attempts: ${counter}`);
        }
    },1000)
}