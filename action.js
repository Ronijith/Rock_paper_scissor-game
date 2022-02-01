let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const scissor_div = document.getElementById("s");
const paper_div = document.getElementById("p");
const rock_div = document.getElementById("r");

function convertToWord(letter){
    if(letter === 'r') return 'Rock';
    if(letter === 's') return 'Scissor';
    if(letter === 'p') return 'Paper';
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(userChoice) +  " beats " + convertToWord(computerChoice) + ".->>>You win!!!";
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("green-glow");},400);
}

function loss(userChoice,computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + ".->>>You loose!!!";
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("red-glow");},400);
}

function draw(userChoice,computerChoice){
    result_p.innerHTML = convertToWord(userChoice) + " and " + convertToWord(computerChoice) + ".->>>Match draw!!!";
    document.getElementById(userChoice).classList.add("grey-glow");
    setTimeout(function(){document.getElementById(userChoice).classList.remove("grey-glow");},400);
}


function compChoice(){
    let computerChoice = ['r','p','s'];
    let randomNumbers = Math.floor(Math.random()*3);
    return computerChoice[randomNumbers];
}

function process(userChoice){
    computerChoice = compChoice();
    switch(userChoice+computerChoice)
    {
        case 'rs':
        case 'sp':
        case 'pr': win(userChoice,computerChoice); break;
        
        case 'rp':
        case 'sr':
        case 'ps': loss(userChoice,computerChoice); break;

        case 'rr':
        case 'ss':
        case 'pp': draw(userChoice,computerChoice);
    }

}

function main(){
    scissor_div.addEventListener('click',function(){
    process('s');
    })

    paper_div.addEventListener('click',function(){
    process('p');
})

    rock_div.addEventListener('click',function(){
    process('r');
})

}
main();