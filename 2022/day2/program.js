// rock beats scissors
// paper beats rock
// scissors beats paper

// X = LOSE
// Y == TIE
// Z == WIN

//ROCK = 1
//PAPER = 2
//SCISSORS = 3


const input = require('./input');
const data = input.data
let player1Score = 0;
let player2Score = 0;
let player1Choice;
let player2Choice;
let win = 6;
let tie = 3;

for(let i=0; i<data.length; i++){
    const choiceArray = data[i]
    switch(choiceArray[0]){
        case 'A':
            player1Choice = 'R'
            player1Score += 1
        break;
        case 'B':
            player1Choice = 'P'
            player1Score += 2
        break;
        case 'C':
            player1Choice = 'S' 
            player1Score += 3
        break;
    }
    switch(choiceArray[1]){
        case 'X':
            player2Choice = 'R'
            player2Score += 1
        break;
        case 'Y':
            player2Choice = 'P'
            player2Score += 2
        break;
        case 'Z':
            player2Choice = 'S'
            player2Score += 3
        break;
    }
    
   if(player1Choice == 'R' && player2Choice == 'S'){
        player1Score += win
        player2Score += loss
    }
   if(player1Choice == 'P' && player2Choice == 'R'){
        player1Score += win
        player2Score += loss
    }
    if(player1Choice == 'S' && player2Choice == 'P'){
        player1Score += win
        player2Score += loss
    }
    if(player1Choice == 'R' && player2Choice == 'R'){
        player1Score += tie
        player2Score += tie
    }
    if(player1Choice == 'P' && player2Choice == 'P'){
        player1Score += tie
        player2Score += tie
    }
    if(player1Choice == 'S' && player2Choice == 'S'){
        player1Score += tie
        player2Score += tie
    }

    if(player2Choice == 'R' && player1Choice == 'S'){
        player2Score += win
        player1Score += loss
    }
   if(player2Choice == 'P' && player1Choice == 'R'){
        player2Score += win
        player1Score += loss
    }
    if(player2Choice == 'S' && player1Choice == 'P'){
        player2Score += win
        player1Score += loss
    }
}

console.log('Part 1');
console.log(`Player 1 Score: ${player1Score}`);
console.log(`Player 2 Score: ${player2Score}`);

let player1Score2 = 0;
let player2Score2 = 0;
let player1Choice2;
let win2 = 6;
let tie2 = 3;

for(let i=0; i<data.length; i++){
    const choiceArray = data[i]
    switch(choiceArray[0]){
        case 'A':
            player1Choice2 = 'R'
            player1Score2 += 1
        break;
        case 'B':
            player1Choice2 = 'P'
            player1Score2 += 2
        break;
        case 'C':
            player1Choice2 = 'S' 
            player1Score2 += 3
        break;
    }
    switch(choiceArray[1]){
        case 'X':
            player1Score2 += win2
            if(player1Choice2 == 'R'){
                player2Score2 +=3
            }
            if(player1Choice2 == 'P'){
                player2Score2 +=1
            }
            if(player1Choice2 == 'S'){
                player2Score2 +=2
            }
        break;
        case 'Y':
            player1Score2 += tie2
            player2Score2 += tie2
            if(player1Choice2 == 'R'){
                player2Score2 +=1
            }
            if(player1Choice2 == 'P'){
                player2Score2 +=2
            }
            if(player1Choice2 == 'S'){
                player2Score2 +=3
            }
        break;
        case 'Z':
            player2Score2 += win2
            if(player1Choice2 == 'R'){
                player2Score2 += 2
            }
            if(player1Choice2 == 'P'){
                player2Score2 += 3
            }
            if(player1Choice2 == 'S'){
                player2Score2 += 1
            }
        break;
    }
}
console.log('Part 2')
console.log(`Player 1 Score: ${player1Score2}`);
console.log(`Player 2 Score: ${player2Score2}`);