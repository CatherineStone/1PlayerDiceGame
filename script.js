let scoreDisplay = document.getElementById("score");

let rollToStart = document.getElementById("rollToStart");

let player = document.getElementById("player");

let score = 0;

// Dice roll:
document.getElementById('rollBtn').addEventListener('click', function () {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice); 
     
     let img1 = document.getElementById("dice1");
     let img2 = document.getElementById("dice2");
     let img3 = document.getElementById("dice3");
     let img4 = document.getElementById("dice4");
     let img5 = document.getElementById("dice5");
     let img6 = document.getElementById("dice6");
 
     const imgArr = [img1,img2,img3,img4,img5,img6];
     imgArr[0].style.display = "none";
     imgArr[1].style.display = "none";
     imgArr[2].style.display = "none";
     imgArr[3].style.display = "none";
     imgArr[4].style.display = "none";
     imgArr[5].style.display = "none";

     rollToStart.style.visibility = "hidden";

     (dice === 1) ? score = 0 : score += dice;
    scoreDisplay.textContent = score;
     
     if(dice ==1 ){
        imgArr[0].style.display = "block";
     
     }
 
     else if(dice == 2){
   
       imgArr[1].style.display = "block";
       
     }
 
     else if(dice == 3){
    
       imgArr[2].style.display = "block";
      
     }
 
     else if(dice == 4){
      
       imgArr[3].style.display = "block";
     
     }
 
     else if(dice == 5){
  
       imgArr[4].style.display = "block";
      
     }
 
     else {
     
       imgArr[5].style.display = "block";
 
     }

     if(score >= 20){
        scoreDisplay.textContent = "You win! Click roll to play again.";
        score = 0;
        rollToStart.style.visibility = "visible";
    }
    if(dice == 1){
        scoreDisplay.textContent = "Rolled a 1, you lose! Try again.";
        score=0;
        rollToStart.style.visibility = "visible";
    }
});
