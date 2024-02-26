// function playNow (){
//     document.getElementById('home').classList.add('hidden');
//     document.getElementById('play-ground').classList.remove('hidden');
// }



function play (){
    const alphabet = getARandomAlphabet ();
    document.getElementById('random-word').innerText = alphabet.toUpperCase() ;

    setBackgroundColor(alphabet);
}



function playNow(){
    addHiddenClass('home');
    addHiddenClass('score');
    removeHiddenClass('play-ground');
    play();

    //update score and life
    setValue('current-score' , 0) ;
    setValue('current-life' , 5) ;

}


document.addEventListener('keyup' , function (event){
        const playerPressed = event.key ; 
       
        const expectedPressed = document.getElementById("random-word").innerText.toLowerCase() ; 

        if(playerPressed === 'Escape'){
            gameOver ();
        }

       if(playerPressed === expectedPressed){

            const currentScoreValue = getCurrentValue('current-score');
            const newValue = currentScoreValue + 1 ; 
            setValue('current-score' , newValue) ;

            removeBackgroundColor (playerPressed);
              play();
       }
       else{
        const currentLifeValue = getCurrentValue('current-life');
        const newValue = currentLifeValue - 1 ; 
        setValue('current-life' , newValue) ;

            if(newValue === 0){
                gameOver();
                document.getElementById('final-score').innerText = getCurrentValue('current-score');

                const element = document.getElementById('random-word').innerText.toLowerCase();
                removeBackgroundColor(element);
                
            }
       }
})


function gameOver (){
    addHiddenClass('play-ground');
    removeHiddenClass('score');
}

