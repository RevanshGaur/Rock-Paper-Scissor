let score_you = 0;
let score_comp = 0;
const choices = document.querySelectorAll('.choice');
const generateCompChoice = () =>{
    let options = ["rock","paper","scissors"]
    let ranIdx =  Math.floor(Math.random() * 3)
    return options[ranIdx];
}
const Draw = () =>{
    console.log("Draw!")
}
const Win = () =>{
    console.log("You won");
}
const Lose = () =>{
    console.log("You lose");
}
//let user = 0;
//let comp = 0;
const userE = document.querySelector('#user');
const compE = document.querySelector('#comp');
const cha = document.querySelector('#msg');
const PlayGame = (userChoice) => {
    console.log(userChoice);
    let compChoice = generateCompChoice();
    console.log(compChoice);
    if(userChoice === compChoice){
        Draw();
        cha.textContent = "Draw";
        cha.style.backgroundColor = 'gray';
    }
    else if(userChoice === 'rock' && compChoice === 'scissors'){
        Win();
        cha.style.backgroundColor = 'green';
        cha.textContent = "You won!!!";
        userE.textContent = Number(userE.textContent) + 1;
    }
    else if(userChoice === 'paper' && compChoice === 'rock'){
        Win();
        userE.textContent = Number(userE.textContent) + 1;
        cha.style.backgroundColor = 'green';
        cha.textContent = "You won!!!";
    }
    else if(userChoice === 'scissors' && compChoice === 'paper'){
        Win();
        userE.textContent = Number(userE.textContent) + 1;
        cha.style.backgroundColor = 'green';
        cha.textContent = "You won!!!";
    }
    else if(compChoice === 'rock' && userChoice === 'scissors'){
        Lose();
        compE.textContent = Number(compE.textContent) + 1;
        cha.style.backgroundColor = 'red';
        cha.textContent = "You lose!";
    }
    else if(compChoice === 'paper' && userChoice === 'rock'){
        Lose();
        compE.textContent = Number(compE.textContent) + 1;
        cha.style.backgroundColor = 'red';
        cha.textContent = "You lose!";
    }
    else if(compChoice === 'scissors' && userChoice === 'paper'){
        Lose();
        compE.textContent = Number(compE.textContent) + 1;
        cha.style.backgroundColor = 'red';
        cha.textContent = 'You lose!';
    }
};

choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        PlayGame(userChoice);
    });
});