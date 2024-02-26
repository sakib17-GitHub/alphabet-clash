function addHiddenClass (id){
            document.getElementById(id).classList.add('hidden');
}

function removeHiddenClass (id){
    document.getElementById(id).classList.remove('hidden');
}

function getARandomAlphabet (){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz' ; 
    const alphabets = alphabetString.split('');
    
    // get a random number between 0-25
    const randomNumber = Math.random()*25 ; 
    const index = Math.round(randomNumber);

    const randomAlphabet = alphabets[index];
    return(randomAlphabet)
}


function setBackgroundColor (id){
    document.getElementById(id).classList.add("bg-orange-500");
}

function removeBackgroundColor (id){
    document.getElementById(id).classList.remove("bg-orange-500");
}


function getCurrentValue(element){
    const currentValue = document.getElementById(element).innerText; 
    const value = parseInt(currentValue) ; 
    return value ; 
}

function setValue (element , value){
    document.getElementById(element).innerText = value ;
}